<?php
require './vendor/autoload.php';

use Carbon\Carbon;
use Medoo\Medoo;
use LucidFrame\Console\ConsoleTable;

// Create database
$database = new Medoo([
    'database_type' => 'sqlite',
    'database_file' => __DIR__ . '/database/database.db',
]);

//select item_id,expired_at from items where type='rune' and tier=0 group by item_id,expired_at;
$fields = ['batch_id', 'item_id', 'price', 'amount', 'posted_by', 'expired_at', 'batched_at'];
$t0RuneDatas = $database->select('items', $fields, [
    'GROUP' => [
        'item_id',
        'expired_at',
    ],
    'HAVING' => [
        "AND" => [
            'type' => 'rune',
            'tier' => 0,
        ],
    ],
]);

//test=============

//print('original count: ' . count($t0RuneDatas) . "\n");

//get batchs
$resultBatchs = $database->select('items', ['batch_id', 'batched_at'], [
    'GROUP' => 'batch_id',
]);
$batchs = [];
foreach ($resultBatchs as $data) {
    $batchs[$data['batch_id']] = Carbon::parse($data['batched_at']);
}

//find the orders had expired in samples
foreach ($t0RuneDatas as $key => &$data) {
    $data['expired_string'] = $data['expired_at'];
    $data['expired_at'] = Carbon::parse($data['expired_at']);
    $isInTheSample = false;
    $isLowSamplingRate = false;

    for ($i = 1; $i < count($batchs); $i++) {
        if (!$batchs[$i]->between($batchs[$i + 1]->copy()->subHour(12), $batchs[$i + 1])) {
            $isLowSamplingRate = true;
            break;
        }

        if ($data['expired_at']->between($batchs[$i], $batchs[$i + 1])) {
            $data['expired_after_batch'] = $i;
            $data['expired_before_batch'] = $i + 1;
            $isInTheSample = true;
            break;
        }
    }
    if (!$isInTheSample || $isLowSamplingRate) {
        unset($t0RuneDatas[$key]);
    }
}

//filter
$fields = ['batch_id', 'item_id', 'price', 'amount', 'posted_by', 'expired_at', 'batched_at'];
foreach ($t0RuneDatas as $key => &$data) {
    $result = $database->select('items', $fields, [
        'AND' => [
            'item_id' => $data['item_id'],
            'expired_at' => $data['expired_string'],
            'batch_id' => $data['expired_after_batch'],
        ],
    ]);
    //var_dump($result);

    //normal expired
    if (!empty($result)) {
        unset($t0RuneDatas[$key]);
    }
}

//price statistic
function comparator($data1, $data2)
{
    return $data1['unit_price'] > $data2['unit_price'];
}

//print('processed count: ' . count($t0RuneDatas) . "\n");

foreach ($t0RuneDatas as $key => $data) {
    $t0RuneDatas[$key]['unit_price'] = $data['price'] / $data['amount'];
}
usort($t0RuneDatas, 'comparator');

$tradingVolumes = [];
$tradingVolumeTotal = 0;
foreach ($t0RuneDatas as $data) {
    $priceKey = number_format($data['unit_price'], 2, '.', '');
    $tradingVolumeTotal += intval($data['amount']);
    if (array_key_exists($priceKey, $tradingVolumes)) {
        $tradingVolumes[$priceKey] += intval($data['amount']);
    } else {
        $tradingVolumes[$priceKey] = intval($data['amount']);
    }
}

function printStatistic($tradingVolumes)
{
    foreach ($tradingVolumes as $key => $tradingVolume) {
        print(str_pad($key, 5, " "));
    }

    foreach ($tradingVolumes as $key => $tradingVolume) {
        print(str_pad($tradingVolume, 5, " "));
    }
}

$statisticString = "\n"
. "From " . $batchs[1]->toIso8601ZuluString()
. " to " . $batchs[count($batchs)]->toIso8601ZuluString() . ".\n"
    . 'There\'re ' . $tradingVolumeTotal . ' T1 rune had traded totally.' . "\n";
print($statisticString);
$headers = [];
$rows = [];
foreach ($tradingVolumes as $key => $tradingVolume) {
    $headers[] = $key;
    $rows[] = $tradingVolume;
}

for ($i = 0; $i < count($headers) / 10; $i++) {
    $table = new ConsoleTable();
    $table
        ->setHeaders(array_merge(["Price"], array_slice($headers, $i * 10, 10)))
        ->addRow(array_merge(["Trading Volume"], array_slice($rows, $i * 10, 10)))
        ->display();
}
print("\n");
//printStatistic($tradingVolumes);

/*
foreach($tradingVolumes as $key=> $tradingVolume){
$rowString = $key . ': ' . $tradingVolume . "\n";
print($rowString);
}*/

//ksort($tradingVolumes);
//var_dump($tradingVolumes);

//var_dump($t0RuneDatas);
/*
var_dump(Carbon::now());

$data = $datas[0];
$datetimeFormat = 'Y-m-d\TH:i:s.v\Z';

print('original datetime: ' . $data['expired_at'] . "\n");

$newDatetime = Carbon::parse($data['expired_at']);
$data['expired_at'] = $newDatetime;

var_dump($data);
 */
