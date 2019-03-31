"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Tile_1 = require("./Tile");
var BuildingType;
(function (BuildingType) {
    BuildingType[BuildingType["BASE"] = 0] = "BASE";
    BuildingType[BuildingType["SPAWN_POINT"] = 1] = "SPAWN_POINT";
    BuildingType[BuildingType["STRUCT_GENERATOR"] = 2] = "STRUCT_GENERATOR";
    BuildingType[BuildingType["RECLAIMATOR"] = 3] = "RECLAIMATOR";
    BuildingType[BuildingType["BARRACK"] = 4] = "BARRACK";
    BuildingType[BuildingType["TRAINING_DATA_GENERATOR"] = 5] = "TRAINING_DATA_GENERATOR";
    BuildingType[BuildingType["PRIME_DATA_GENERATOR"] = 6] = "PRIME_DATA_GENERATOR";
    BuildingType[BuildingType["SHIELD_GENERATOR"] = 7] = "SHIELD_GENERATOR";
    BuildingType[BuildingType["ATTACK_PLANT"] = 8] = "ATTACK_PLANT";
    BuildingType[BuildingType["GROWING_PLANT"] = 9] = "GROWING_PLANT";
    BuildingType[BuildingType["GROWING_MOTHER"] = 10] = "GROWING_MOTHER";
    BuildingType[BuildingType["REPAIR_PLANT"] = 11] = "REPAIR_PLANT";
})(BuildingType = exports.BuildingType || (exports.BuildingType = {}));
exports.BuildingProperty = (_a = {},
    _a[BuildingType.BASE] = {
        size: Tile_1.TileSize.SMALL,
        struct: 0
    },
    _a[BuildingType.SPAWN_POINT] = {
        size: Tile_1.TileSize.SMALL,
        struct: 0
    },
    _a[BuildingType.STRUCT_GENERATOR] = {
        size: Tile_1.TileSize.SMALL,
        struct: 5
    },
    _a[BuildingType.RECLAIMATOR] = {
        size: Tile_1.TileSize.SMALL,
        struct: 5
    },
    _a[BuildingType.BARRACK] = {
        size: Tile_1.TileSize.LARGE,
        struct: 5
    },
    _a[BuildingType.TRAINING_DATA_GENERATOR] = {
        size: Tile_1.TileSize.SMALL,
        struct: 5
    },
    _a[BuildingType.PRIME_DATA_GENERATOR] = {
        size: Tile_1.TileSize.SMALL,
        struct: 5
    },
    _a[BuildingType.SHIELD_GENERATOR] = {
        size: Tile_1.TileSize.SMALL,
        struct: 5
    },
    _a[BuildingType.ATTACK_PLANT] = {
        size: Tile_1.TileSize.SMALL,
        struct: 5
    },
    _a[BuildingType.GROWING_PLANT] = {
        size: Tile_1.TileSize.SMALL,
        struct: 5
    },
    _a[BuildingType.GROWING_MOTHER] = {
        size: Tile_1.TileSize.SMALL,
        struct: 5
    },
    _a[BuildingType.REPAIR_PLANT] = {
        size: Tile_1.TileSize.SMALL,
        struct: 5
    },
    _a);
