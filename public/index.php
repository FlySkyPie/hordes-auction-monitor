<?php

require './../vendor/autoload.php';

use DI\Container;
use Medoo\Medoo;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Transformer\ItemTransformer;

// Create database
$database = new Medoo([
    'database_type' => 'sqlite',
    'database_file' => __DIR__ . '/../database/database.db',
]);

// Create Container
$container = new Container();
AppFactory::setContainer($container);

// Set view in Container
$container->set('view', function () {
    return Twig::create(__DIR__ . '/../templates', [
        'cache' => __DIR__ . '/../cache',
    ]);
});

$app = AppFactory::create();

/**
 * Stack datas of items.
 */

$app->post('/stack', function (Request $request, Response $response) use (
    $database
) {
    $body =  $request->getBody();;
    //error_log($body);
    try {
        $transformer = new ItemTransformer();
        $json = json_decode($body, true);
        
        //error_log(var_export($json ));

        foreach ($json as $itemData) {
            $itemData['item_id'];
            $itemData['price'];
            $itemData['amount'];
            $itemData['tier'];
            $itemData['type'];
            $itemData['upgrade'];
            $itemData['attributes'];
            $itemData['posted_by'];
            $itemData['posted_at'];

            $itemAttributes = $transformer->transformAttributes($itemData['attributes']);
            unset($itemData['attributes']);
            $result = array_merge($itemData, $itemAttributes);
            $database->insert('buffer', $result);
        }
        return $response->withHeader('Access-Control-Allow-Origin', '*');
    } catch (Exception $e) {
        //data are mess.
        $response->getBody()->write('invalidQuery');
        return $response->withStatus(400)
            ->withHeader('Content-Type', 'text/html');
    }
});

/**
 * Saving datas.
 */
$app->post('/save', function (Request $request, Response $response) use (
    $database
) {
    //TODO: move datas from buffer to items.

    //clear table of buffer

    $database->delete('buffer', []);
    $database->delete('sqlite_sequence', ['name', 'buffer']);

    $response->getBody()->write('Successful saved!');
    return $response->withStatus(200)->withHeader('Content-Type', 'text/html');
    ;
});

/**
 * Awesome button page.
 */

$app->get('/save', function (Request $request, Response $response) use (
    $database
) {
    $amount = $database->count('buffer');

    return $this->get('view')->render($response, 'index.twig', [
        'amount' => $amount,
    ]);
});

$app->run();
