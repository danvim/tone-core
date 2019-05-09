"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var EntityType;
(function (EntityType) {
    EntityType[EntityType["EMPTY"] = 0] = "EMPTY";
    EntityType[EntityType["WORKER"] = 1] = "WORKER";
    EntityType[EntityType["SOLDIER_0"] = 2] = "SOLDIER_0";
    EntityType[EntityType["SOLDIER_1"] = 3] = "SOLDIER_1";
    EntityType[EntityType["SOLDIER_2"] = 4] = "SOLDIER_2";
    EntityType[EntityType["SEED"] = 5] = "SEED";
    EntityType[EntityType["ENEMY_0"] = 6] = "ENEMY_0";
    EntityType[EntityType["ENEMY_1"] = 7] = "ENEMY_1";
    EntityType[EntityType["ENEMY_2"] = 8] = "ENEMY_2";
    EntityType[EntityType["BULLET_0"] = 9] = "BULLET_0";
    EntityType[EntityType["BULLET_1"] = 10] = "BULLET_1";
    EntityType[EntityType["BULLET_2"] = 11] = "BULLET_2";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
exports.EntityProperty = (_a = {},
    _a[EntityType.WORKER] = {
        hp: 30,
    },
    _a[EntityType.SOLDIER_0] = {
        hp: 100,
    },
    _a[EntityType.SOLDIER_1] = {
        hp: 100,
    },
    _a[EntityType.SOLDIER_2] = {
        hp: 100,
    },
    _a[EntityType.SEED] = {
        hp: 100,
    },
    _a[EntityType.ENEMY_0] = {
        hp: 100,
    },
    _a[EntityType.ENEMY_1] = {
        hp: 100,
    },
    _a[EntityType.ENEMY_2] = {
        hp: 100,
    },
    _a[EntityType.BULLET_0] = {
        hp: 100,
    },
    _a[EntityType.BULLET_1] = {
        hp: 100,
    },
    _a[EntityType.BULLET_2] = {
        hp: 100,
    },
    _a);
