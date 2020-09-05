import { EquipmentAttributeRule } from './../src/EquipmentAttributeRule';


describe('test EquipmentAttributeRule', function () {
    let theRule = new EquipmentAttributeRule();

    test('test isEquipment checker', function () {
        let rule = new EquipmentAttributeRule();
        expect(rule.isEquipment('rune')).toBe(false);
        expect(rule.isEquipment('misc')).toBe(false);
        expect(rule.isEquipment('hammer')).toBe(true);
        expect(rule.isEquipment('totem')).toBe(true);
    })

    test('test rule of T5 amulet', () => {
        let rule = theRule.getRule('amulet5');
        expect(rule.level).toBe(48);
        expect(rule.weight).toBeCloseTo(0.3);
        expect(rule.stats[0].id).toBe(7);
        expect(rule.stats[0].min).toBeCloseTo(58);
        expect(rule.stats[0].max).toBeCloseTo(114.4);
    })

    test('test rule of T5 armlet', () => {
        let rule = theRule.getRule('armlet5');
        expect(rule.level).toBe(39);
        expect(rule.weight).toBeCloseTo(0.3);
        expect(rule.stats[0].id).toBe(6);
        expect(rule.stats[0].min).toBeCloseTo(29.5);
        expect(rule.stats[0].max).toBeCloseTo(54.1);
    })

    test('test rule of T5 armor', () => {
        let rule = theRule.getRule('armor5');
        expect(rule.level).toBe(47);
        expect(rule.weight).toBeCloseTo(1);
        expect(rule.stats[0].id).toBe(6);
        expect(rule.stats[0].min).toBeCloseTo(67);
        expect(rule.stats[0].max).toBeCloseTo(134);
    })

    test('test rule of T4 bag', () => {
        let rule = theRule.getRule('bag4');
        expect(rule.level).toBe(85);
        expect(rule.weight).toBeCloseTo(0.1);
        expect(rule.stats[0].id).toBe(19);
        expect(rule.stats[0].min).toBeCloseTo(9.5);
        expect(rule.stats[0].max).toBeCloseTo(29.5);
    })

    test('test rule of T5 boot', () => {
        let rule = theRule.getRule('boot5');
        expect(rule.level).toBe(40);
        expect(rule.weight).toBeCloseTo(0.4);
        expect(rule.stats[1].id).toBe(12);
        expect(rule.stats[1].min).toBeCloseTo(32);
        expect(rule.stats[1].max).toBeCloseTo(63);
    })

    test('test rule of T5 bow', () => {
        let rule = theRule.getRule('bow5');
        expect(rule.level).toBe(29);
        expect(rule.weight).toBeCloseTo(1);
        expect(rule.stats[2].id).toBe(17);
        expect(rule.stats[2].min).toBeCloseTo(11.45);
        expect(rule.stats[2].max).toBeCloseTo(13.9);
    })

    test('test rule of T5 glove', () => {
        let rule = theRule.getRule('glove5');
        expect(rule.level).toBe(40);
        expect(rule.weight).toBeCloseTo(0.4);
        expect(rule.stats[2].id).toBe(14);
        expect(rule.stats[2].min).toBeCloseTo(5);
        expect(rule.stats[2].max).toBeCloseTo(76);
    })

    test('test rule of T5 hammer', () => {
        let rule = theRule.getRule('hammer5');
        expect(rule.level).toBe(29);
        expect(rule.weight).toBeCloseTo(1);
        expect(rule.stats[2].id).toBe(17);
        expect(rule.stats[2].min).toBeCloseTo(16.45);
        expect(rule.stats[2].max).toBeCloseTo(18.9);
    })

    test('test rule of T5 orb', () => {
        let rule = theRule.getRule('orb5');
        expect(rule.level).toBe(52);
        expect(rule.weight).toBeCloseTo(0.5);
        expect(rule.stats[1].id).toBe(9);
        expect(rule.stats[1].min).toBeCloseTo(6.2);
        expect(rule.stats[1].max).toBeCloseTo(19.6);
    })

    test('test rule of T5 quiver', () => {
        let rule = theRule.getRule('quiver5');
        expect(rule.level).toBe(52);
        expect(rule.weight).toBeCloseTo(0.5);
        expect(rule.stats[1].id).toBe(14);
        expect(rule.stats[1].min).toBeCloseTo(10.2);
        expect(rule.stats[1].max).toBeCloseTo(60.8);
    })

    test('test rule of T5 ring', () => {
        let rule = theRule.getRule('ring5');
        expect(rule.level).toBe(46);
        expect(rule.weight).toBeCloseTo(0.2);
        expect(rule.stats[1].id).toBe(7);
        expect(rule.stats[1].min).toBeCloseTo(32.6);
        expect(rule.stats[1].max).toBeCloseTo(61);
    })

    test('test rule of T5 shield', () => {
        let rule = theRule.getRule('shield5');
        expect(rule.level).toBe(52);
        expect(rule.weight).toBeCloseTo(0.5);
        expect(rule.stats[0].id).toBe(12);
        expect(rule.stats[0].min).toBeCloseTo(61.6);
        expect(rule.stats[0].max).toBeCloseTo(106.8);
    })

    test('test rule of T5 staff', () => {
        let rule = theRule.getRule('staff5');
        expect(rule.level).toBe(29);
        expect(rule.weight).toBeCloseTo(1);
        expect(rule.stats[1].id).toBe(11);
        expect(rule.stats[1].min).toBeCloseTo(26.2);
        expect(rule.stats[1].max).toBeCloseTo(69.3);
    })

    test('test rule of T5 sword', () => {
        let rule = theRule.getRule('sword5');
        expect(rule.level).toBe(29);
        expect(rule.weight).toBeCloseTo(1);
        expect(rule.stats[2].id).toBe(17);
        expect(rule.stats[2].min).toBeCloseTo(21.45);
        expect(rule.stats[2].max).toBeCloseTo(23.9);
    })

    test('test rule of T5 totem', () => {
        let rule = theRule.getRule('totem5');
        expect(rule.level).toBe(52);
        expect(rule.weight).toBeCloseTo(0.5);
        expect(rule.stats[0].id).toBe(9);
        expect(rule.stats[0].min).toBeCloseTo(6.2);
        expect(rule.stats[0].max).toBeCloseTo(25.8);
    })
}) 
