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
        let rules = theRule.getRules();
        expect(rules['armlet5'].level).toBe(39);
        expect(rules['armlet5'].stats[0].id).toBe(6);
        expect(rules['armlet5'].stats[0].min).toBeCloseTo(29.5);
        expect(rules['armlet5'].stats[0].max).toBeCloseTo(54.1);
    })

    test('test rule of T5 armor', () => {
        let rules = theRule.getRules();
        expect(rules['armor5'].level).toBe(47);
        expect(rules['armor5'].stats[0].id).toBe(6);
        expect(rules['armor5'].stats[0].min).toBeCloseTo(67);
        expect(rules['armor5'].stats[0].max).toBeCloseTo(134);
    })

    test('test rule of T4 bag', () => {
        let rules = theRule.getRules();
        expect(rules['bag4'].level).toBe(85);
        expect(rules['bag4'].stats[0].id).toBe(19);
        expect(rules['bag4'].stats[0].min).toBeCloseTo(9.5);
        expect(rules['bag4'].stats[0].max).toBeCloseTo(29.5);
    })

    test('test rule of T5 boot', () => {
        let rules = theRule.getRules();
        expect(rules['boot5'].level).toBe(40);
        expect(rules['boot5'].stats[1].id).toBe(12);
        expect(rules['boot5'].stats[1].min).toBeCloseTo(32);
        expect(rules['boot5'].stats[1].max).toBeCloseTo(63);
    })

    test('test rule of T5 bow', () => {
        let rules = theRule.getRules();
        expect(rules['bow5'].level).toBe(29);
        expect(rules['bow5'].stats[2].id).toBe(17);
        expect(rules['bow5'].stats[2].min).toBeCloseTo(11.45);
        expect(rules['bow5'].stats[2].max).toBeCloseTo(13.9);
    })

    test('test rule of T5 glove', () => {
        let rules = theRule.getRules();
        expect(rules['glove5'].level).toBe(40);
        expect(rules['glove5'].stats[2].id).toBe(14);
        expect(rules['glove5'].stats[2].min).toBeCloseTo(5);
        expect(rules['glove5'].stats[2].max).toBeCloseTo(76);
    })

    test('test rule of T5 hammer', () => {
        let rules = theRule.getRules();
        expect(rules['hammer5'].level).toBe(29);
        expect(rules['hammer5'].stats[2].id).toBe(17);
        expect(rules['hammer5'].stats[2].min).toBeCloseTo(16.45);
        expect(rules['hammer5'].stats[2].max).toBeCloseTo(18.9);
    })

    test('test rule of T5 orb', () => {
        let rules = theRule.getRules();
        expect(rules['orb5'].level).toBe(52);
        expect(rules['orb5'].stats[1].id).toBe(9);
        expect(rules['orb5'].stats[1].min).toBeCloseTo(6.2);
        expect(rules['orb5'].stats[1].max).toBeCloseTo(19.6);
    })

    test('test rule of T5 quiver', () => {
        let rules = theRule.getRules();
        expect(rules['quiver5'].level).toBe(52);
        expect(rules['quiver5'].stats[1].id).toBe(14);
        expect(rules['quiver5'].stats[1].min).toBeCloseTo(10.2);
        expect(rules['quiver5'].stats[1].max).toBeCloseTo(60.8);
    })

    test('test rule of T5 ring', () => {
        let rules = theRule.getRules();
        expect(rules['ring5'].level).toBe(46);
        expect(rules['ring5'].stats[1].id).toBe(7);
        expect(rules['ring5'].stats[1].min).toBeCloseTo(32.6);
        expect(rules['ring5'].stats[1].max).toBeCloseTo(61);
    })

    test('test rule of T5 shield', () => {
        let rules = theRule.getRules();
        expect(rules['shield5'].level).toBe(52);
        expect(rules['shield5'].stats[0].id).toBe(12);
        expect(rules['shield5'].stats[0].min).toBeCloseTo(61.6);
        expect(rules['shield5'].stats[0].max).toBeCloseTo(106.8);
    })

    test('test rule of T5 staff', () => {
        let rules = theRule.getRules();
        expect(rules['staff5'].level).toBe(29);
        expect(rules['staff5'].stats[1].id).toBe(11);
        expect(rules['staff5'].stats[1].min).toBeCloseTo(26.2);
        expect(rules['staff5'].stats[1].max).toBeCloseTo(69.3);
    })

    test('test rule of T5 sword', () => {
        let rules = theRule.getRules();
        expect(rules['sword5'].level).toBe(29);
        expect(rules['sword5'].stats[2].id).toBe(17);
        expect(rules['sword5'].stats[2].min).toBeCloseTo(21.45);
        expect(rules['sword5'].stats[2].max).toBeCloseTo(23.9);
    })

    test('test rule of T5 totem', () => {
        let rules = theRule.getRules();
        expect(rules['totem5'].level).toBe(52);
        expect(rules['totem5'].stats[0].id).toBe(9);
        expect(rules['totem5'].stats[0].min).toBeCloseTo(6.2);
        expect(rules['totem5'].stats[0].max).toBeCloseTo(25.8);
    })
}) 
