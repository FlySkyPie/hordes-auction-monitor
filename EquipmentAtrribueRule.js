class EquipmentAtrribueRule {

    constructor() {
        this.attributeFactors = {
            hammer: {
                baselvl: 0,
                tiers: 17,
                stats: [
                    { id: 10, base: 1, min: .6, max: 1 },
                    { id: 11, base: 3, min: .8, max: 1.7 },
                    { id: 17, base: 15, min: .05, max: .1 }]
            },
            bow: {
                baselvl: 0,
                tiers: 17,
                stats: [
                    { id: 10, base: 1, min: .6, max: 1 },
                    { id: 11, base: 3, min: .8, max: 1.7 },
                    { id: 17, base: 10, min: .05, max: .1 }]
            },
            staff: {
                baselvl: 0,
                tiers: 17,
                stats: [
                    { id: 10, base: 1, min: .6, max: 1 },
                    { id: 11, base: 3, min: .8, max: 1.7 },
                    { id: 17, base: 10, min: .05, max: .1 }]
            },
            sword: {
                baselvl: 0,
                tiers: 17,
                stats: [
                    { id: 10, base: 1, min: .6, max: 1 },
                    { id: 11, base: 3, min: .8, max: 1.7 },
                    { id: 17, base: 20, min: .05, max: .1 }]
            },
            armlet: {
                baselvl: 1,
                tiers: 13,
                stats: [
                    { id: 6, base: 10, min: .5, max: .9 },
                    { id: 12, base: 7, min: .5, max: .9 }]
            },
            armor: {
                baselvl: 2,
                tiers: 11,
                stats: [
                    { id: 12, base: 10, min: 1.5, max: 3 },
                    { id: 6, base: 20, min: 1, max: 2 }]
            },
            bag: {
                baselvl: 5,
                tiers: 5,
                stats: [
                    { id: 19, base: 1, min: .1, max: .3 }]
            },
            boot: {
                baselvl: 2,
                tiers: 13,
                stats: [
                    { id: 6, base: 10, min: .6, max: 1 },
                    { id: 12, base: 8, min: .6, max: 1.2 },
                    { id: 15, base: 3, min: .03, max: .1 }]
            },
            glove: {
                baselvl: 2,
                tiers: 13,
                stats: [
                    { id: 6, base: 10, min: .6, max: 1 },
                    { id: 12, base: 8, min: .7, max: 1.2 },
                    { id: 14, base: 1, min: .1, max: 1.5 }]
            },
            ring: {
                baselvl: 5,
                tiers: 12,
                stats: [
                    { id: 6, base: 10, min: .5, max: .9 },
                    { id: 7, base: 5, min: .6, max: 1 }]
            },
            amulet: {
                baselvl: 7,
                tiers: 12,
                stats:
                    [
                        { id: 7, base: 10, min: 1, max: 1.8 },
                        { id: 9, base: 1, min: .2, max: .3 }]
            },
            quiver: {
                baselvl: 2,
                tiers: 10,
                stats:
                    [{ id: 14, base: 2, min: .1, max: .5 }]
            },
            shield: {
                baselvl: 2,
                tiers: 10,
                stats:
                    [
                        { id: 12, base: 20, min: .9, max: 1.5 },
                        { id: 13, base: 4, min: 1, max: 3 }]
            },
            totem: {
                baselvl: 2,
                tiers: 10,
                stats:
                    [
                        { id: 12, base: 10, min: .3, max: .8 },
                        { id: 9, base: 1, min: .1, max: .2 }]
            },
            orb: {
                baselvl: 2,
                tiers: 10,
                stats:
                    [
                        { id: 3, base: 10, min: .3, max: .8 },
                        { id: 9, base: 1, min: .1, max: .3 }]
            },
        };

        this.rules = {};
        this.createEquipmentRules();
    }

    createEquipmentRules() {
        for (let eqipmentType in this.attributeFactors) {
            let attributeFactor = this.attributeFactors[eqipmentType];

            for (let tier = 0; tier < attributeFactor.tiers; tier++) {
                var itemLevel =
                    attributeFactor.baselvl + Math.floor(tier / attributeFactor.tiers * 100);
                let stats = [];
                attributeFactor.stats.forEach(attributeFactor => {
                    stats.push({
                        id: attributeFactor.id,
                        min: attributeFactor.base + itemLevel * attributeFactor.min,
                        max: attributeFactor.base + (itemLevel + 10) * attributeFactor.max
                    });
                });
                let obj = {
                    type: eqipmentType,
                    tier: tier,
                    stats: stats ,
                    level: itemLevel,
                };
                this.rules[obj.type + obj.tier] = obj;
            }
        }
    }
}

let rule = new EquipmentAtrribueRule();
console.log(JSON.stringify(rule.rules) );