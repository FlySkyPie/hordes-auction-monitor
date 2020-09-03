var types = {
    hammer: {
        baselvl: 0,
        slot: [101],
        tiers: 17,
        drop: .4,
        weight: 1,
        class: 3,
        stats: {
            10: {
                base: 1,
                min: .6,
                max: 1
            },
            11: {
                base: 3,
                min: .8,
                max: 1.7
            },
            17: {
                base: 15,
                min: .05,
                max: .1
            }
        }
    },
    bow: {
        baselvl: 0,
        slot: [101],
        tiers: 17,
        drop: .4,
        weight: 1,
        class: 2,
        stats: {
            10: {
                base: 1,
                min: .6,
                max: 1
            },
            11: {
                base: 3,
                min: .8,
                max: 1.7
            },
            17: {
                base: 10,
                min: .05,
                max: .1
            }
        }
    },
    staff: {
        baselvl: 0,
        slot: [101],
        tiers: 17,
        drop: .4,
        weight: 1,
        class: 1,
        stats: {
            10: {
                base: 1,
                min: .6,
                max: 1
            },
            11: {
                base: 3,
                min: .8,
                max: 1.7
            },
            17: {
                base: 10,
                min: .05,
                max: .1
            }
        }
    },
    sword: {
        baselvl: 0,
        slot: [101],
        tiers: 17,
        drop: .4,
        weight: 1,
        class: 0,
        stats: {
            10: {
                base: 1,
                min: .6,
                max: 1
            },
            11: {
                base: 3,
                min: .8,
                max: 1.7
            },
            17: {
                base: 20,
                min: .05,
                max: .1
            }
        }
    },
    armlet: {
        baselvl: 1,
        slot: [102],
        tiers: 13,
        drop: 1,
        weight: .3,
        stats: {
            6: {
                base: 10,
                min: .5,
                max: .9
            },
            12: {
                base: 7,
                min: .5,
                max: .9
            }
        }
    },
    armor: {
        baselvl: 2,
        slot: [103],
        tiers: 11,
        drop: 1,
        weight: 1,
        stats: {
            12: {
                base: 10,
                min: 1.5,
                max: 3
            },
            6: {
                base: 20,
                min: 1,
                max: 2
            }
        }
    },
    bag: {
        baselvl: 5,
        slot: [104],
        tiers: 5,
        drop: 1,
        weight: .1,
        stats: {
            19: {
                base: 1,
                min: .1,
                max: .3
            }
        }
    },
    boot: {
        baselvl: 2,
        slot: [105],
        tiers: 13,
        drop: 1,
        weight: .4,
        stats: {
            6: {
                base: 10,
                min: .6,
                max: 1
            },
            12: {
                base: 8,
                min: .6,
                max: 1.2
            },
            15: {
                base: 3,
                min: .03,
                max: .1
            }
        }
    },
    glove: {
        baselvl: 2,
        slot: [106],
        tiers: 13,
        drop: 1,
        weight: .4,
        stats: {
            6: {
                base: 10,
                min: .6,
                max: 1
            },
            12: {
                base: 8,
                min: .7,
                max: 1.2
            },
            14: {
                base: 1,
                min: .1,
                max: 1.5
            }
        }
    },
    ring: {
        baselvl: 5,
        slot: [107],
        tiers: 12,
        drop: .8,
        weight: .2,
        stats: {
            6: {
                base: 10,
                min: .5,
                max: .9
            },
            7: {
                base: 5,
                min: .6,
                max: 1
            }
        }
    },
    amulet: {
        baselvl: 7,
        slot: [108],
        tiers: 12,
        drop: .8,
        weight: .3,
        stats: {
            7: {
                base: 10,
                min: 1,
                max: 1.8
            },
            9: {
                base: 1,
                min: .2,
                max: .3
            }
        }
    },
    quiver: {
        baselvl: 2,
        slot: [109],
        tiers: 10,
        drop: .7,
        weight: .5,
        class: 2,
        stats: {
            14: {
                base: 2,
                min: .1,
                max: .5
            }
        }
    },
    shield: {
        baselvl: 2,
        slot: [109],
        tiers: 10,
        drop: .7,
        weight: .5,
        class: 0,
        stats: {
            12: {
                base: 20,
                min: .9,
                max: 1.5
            },
            13: {
                base: 4,
                min: 1,
                max: 3
            }
        }
    },
    totem: {
        baselvl: 2,
        slot: [109],
        tiers: 10,
        drop: .7,
        weight: .5,
        class: 3,
        stats: {
            12: {
                base: 10,
                min: .3,
                max: .8
            },
            9: {
                base: 1,
                min: .1,
                max: .2
            }
        }
    },
    orb: {
        baselvl: 2,
        slot: [109],
        tiers: 10,
        drop: .7,
        weight: .5,
        class: 1,
        stats: {
            3: {
                base: 10,
                min: .3,
                max: .8
            },
            9: {
                base: 1,
                min: .1,
                max: .3
            }
        }
    },
    rune: {
        baselvl: 1,
        tiers: 11,
        drop: .8,
        quality: 70
    },
    misc: {
        drop: 7,
        weight: .1
    },
    book: {
        drop: 1.5,
        weight: .5
    },
    charm: {
        slot: [110, 111],
        noupgrade: !0,
        undroppable: !0,
        drop: 0,
        stackable: !1
    },
    mount: {
        noupgrade: !0,
        undroppable: !0,
        drop: 0,
        stackable: !1
    },
    box: {
        noupgrade: !0,
        undroppable: !0,
        drop: 0,
        stackable: !1
    },
    gold: {
        drop: 20
    }
};
var boxes = [{
    id: 0,
    storeValue: 300,
    quality: 90,
    level: 1,
    custom: ["Contains one random mount of rare or epic quality"]
}],
    generate$2 = function (t) {
        list$1.forEach((function (e) {
            if (!e.engineOnly)
                var n = function (n) {
                    var r = 5 * e.id + n;
                    t["book".concat(r)] = {
                        type: "book",
                        tier: r,
                        level: e.minlevel + 8 * n,
                        skillid: e.id,
                        skilllevel: n,
                        class: e.class,
                        noReward: e.noReward || !1,
                        goldValue: e.goldValue || (e.minlevel + 5 * n < 5 ? 4 : 0),
                        quality: Math.round(Math.min(99, 30 + n / 5 * 70)),
                        art: bookArt(r, e.class),
                        useSkill: 101,
                        use: function (t, n, r, i) {
                            castSkill(t, e.id)
                        }
                    }
                };
            for (r = 0; r < e.skilllevels; ++r) {
                n(r)
            }
        }))
    },
    generate$3 = function (t) {
        boxes.forEach((function (e) {
            t["box" + e.id] = _objectSpread$a(_objectSpread$a({}, e), {}, {
                type: "box",
                tier: e.id,
                unsellable: !0,
                useSkill: 103,
                use: function (t, e, n, r) { }
            })
        }))
    },
    generate$4 = function (t) {
        for (var type in types) {
            if (!types[type].tiers) {
                continue;
            }

            var protoAttribute = types[type];
            for (var tier = 0; tier < protoAttribute.tiers; ++tier) {
                var itemLevel =
                    protoAttribute.baselvl + Math.floor(tier / protoAttribute.tiers * 100);
                let obj = {
                    type: type,//
                    tier: tier,//
                    stats: protoAttribute.stats,
                    level: itemLevel,//
                    class: protoAttribute.class,//
                    quality: protoAttribute.quality//
                };
                generateEquipment(obj, t);
            }
        }
    },
    generateEquipment = function (obj, logicArray) {
        var n = {
            level: obj.level,
            type: obj.type,
            tier: obj.tier,
            stats: obj.stats ? new Map : void 0,
            class: obj.class,
            quality: obj.quality
        };
        obj.stats && Object.keys(obj.stats).sort((a, b) => a - b).forEach((function (e) {
            var r = obj.stats[e];
            n.stats.set(parseInt(e), {
                min: r.base + obj.level * r.min,
                max: r.base + (obj.level + 10) * r.max
            })
        })), logicArray[obj.type + obj.tier] = n
    },
    generate$5 = function (t) {
        for (var e = [150, 100, 300, 200, 600, 300], n = 0; n < 6; ++n) {
            var r = Math.floor(n / 2),
                i = n % 2 == 0;
            t["misc" + n] = {
                type: "misc",
                tier: n,
                level: 1 + 20 * r,
                goldvalue: Math.pow(5, r),
                quality: 15,
                custom: [e[n] + (i ? " HP recovered" : " MP recovered")],
                useSkill: 100,
                use: function (t, e, n, r) { }
            }
        }
    },
    logic = {};
generate$4(logic), generate$5(logic), Object.values(logic).forEach((function (t, e) {
    return t.logicId = e
}));

console.log(logic);