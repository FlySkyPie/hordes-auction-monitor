import { EquipmentAttributeRule } from './EquipmentAttributeRule';

export class EquipmentTransformer {
    constructor() {
        this.randomStats = {
            6: { min: .2, max: .8 },
            7: { min: .2, max: .5 },
            8: { min: .1, max: 1 },
            9: { min: .1, max: .5 },
            10: { min: .03, max: .13 },
            11: { min: .1, max: .2 },
            12: { min: .1, max: 0.8 },
            13: { min: .1, max: .4 },
            14: { min: .1, max: .5 },
            16: { min: .1, max: .4 },
            2: { min: .08, max: .45 },
            0: { min: .08, max: .45 },
            3: { min: .08, max: .45 },
            4: { min: .08, max: .45 },
            1: { min: .08, max: .45 },
            5: { min: .08, max: .45 },
            18: { min: .01, max: .15 }
        };
        this.upgradeGains = {
            6: 3,
            7: 3,
            8: 3,
            9: 2,
            10: 1,
            11: 1,
            12: 5,
            13: 5,
            14: 5,
            15: .3,
            16: 5,
            17: 0,
            2: 2,
            0: 2,
            3: 2,
            4: 2,
            1: 2,
            5: 2,
            19: 1,
            18: 3
        };

        this.randomStatKeys = Object.keys(this.randomStats);

        this.ruleRepository = new EquipmentAttributeRule();
    }

    getStats(type, tier, upgrade, rolls) {
        let equipmentStats = [];
        let rule = this.ruleRepository.getRule(type + tier);
        let rollIndex = 0;
        let quality = rolls[rollIndex++];

        //base stats
        rule.stats.forEach(attribute => {
            let attributeValue = Math.floor(
                attribute.min +
                (attribute.max - attribute.min) * Math.pow(quality / 100, 2) +
                this.upgradeGains[attribute.id] * upgrade
            );
            equipmentStats.push({
                id: attribute.id,
                type: "base",
                qual: quality,
                value: attributeValue
            });
        });

        //bonus stats
        const bonusNumber = Math.round((quality / 100) ** 1.5 * 3.6);
        for (let e = 0; e < bonusNumber; ++e) {
            //get bonus attribute id
            let i = rolls[rollIndex++];
            let randAttributeId = -1;
            do {
                randAttributeId = parseInt(this.getRandStatKey(i / 101));
                i = (i + 5) % 100;
            } while (this.isStatusHasAttribute(equipmentStats, randAttributeId));

            //get value of attribute
            var bonusQuality = (rolls[rollIndex++] + quality) / 2;
            let randomStat = this.randomStats[randAttributeId];
            let upgradeGain = this.upgradeGains[randAttributeId];
            let originalBonus = (randomStat.min + (randomStat.max - randomStat.min) * Math.pow(bonusQuality / 100, 2))
                * rule.level * rule.weight;
            equipmentStats.push({
                id: randAttributeId,
                type: "bonus",
                qual: bonusQuality,
                value: Math.ceil(
                    Math.max(originalBonus, upgradeGain) + upgradeGain * upgrade
                )
            });
        }
        equipmentStats.sort((a, b) => a.id - b.id);
        return equipmentStats;
    }

    isStatusHasAttribute(stats, attributeId) {
        let hasAttribue = element => {
            return element['id'] === attributeId;
        };
        return stats.some(hasAttribue);

    }

    getRandStatKey(rate) {
        let id = Math.floor(rate * this.randomStatKeys.length);
        return this.randomStatKeys[id];
    }
}