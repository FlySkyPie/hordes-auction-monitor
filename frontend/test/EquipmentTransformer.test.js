import { EquipmentTransformer } from './../src/EquipmentTransformer'

describe('test EquipmentTransformer', function () {
    let transformer = new EquipmentTransformer();
    test('test item 98929373', function () {
        let type = 'hammer';
        let tier = 4;
        let upgrade = 0;
        let rolls = [79, 24, 91, 11, 69, 88, 79, 96, 74, 46, 78, 55, 82, 68, 0, 51, 7, 9, 42, 49, 86];
        let status = transformer.getStats(type, tier, upgrade, rolls);
        expect(status[0].id).toBe(1);
        expect(status[0].value).toBeCloseTo(7);
        expect(status[1].id).toBe(4);
        expect(status[1].value).toBeCloseTo(8);
        expect(status[2].id).toBe(10);
        expect(status[2].value).toBeCloseTo(26);
        expect(status[3].id).toBe(11);
        expect(status[3].value).toBeCloseTo(44);
        expect(status[4].id).toBe(14);
        expect(status[4].value).toBeCloseTo(9);
        expect(status[5].id).toBe(17);
        expect(status[5].value).toBeCloseTo(17);
    });
})