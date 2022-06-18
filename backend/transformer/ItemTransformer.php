<?php
namespace Transformer;

class ItemTransformer
{
    private function getAttributeEnum()
    {
        return $attributesMap = [
            'strength',
            'staming',
            'dexterity',
            'intelligence',
            'wisdom',
            'luck',
            'hp',
            'mp',
            'hp_reg',
            'mp_reg',
            'damage_min',
            'damage_max',
            'defense',
            'block',
            'critial',
            'move_speed',
            'haste',
            'attack_speed',
            'item_find',
            'bage_slots',
            'fame', //not sure
        ];
    }

    public function transformAttributes(array $data)
    {
        $attributesMap = $this->getAttributeEnum();
        $attributes = [];

        foreach ($data as $attributeId => $attributeValues) {
            $attributes[$attributesMap[$attributeId]] = $attributeValues['value'];
        }
        return $attributes;
    }
}
