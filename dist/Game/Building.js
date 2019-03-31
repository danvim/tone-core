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
    BuildingType[BuildingType["INFORMATION_CLUSTOR"] = 8] = "INFORMATION_CLUSTOR";
    BuildingType[BuildingType["ATTACK_PLANT"] = 9] = "ATTACK_PLANT";
    BuildingType[BuildingType["GROWING_PLANT"] = 10] = "GROWING_PLANT";
    BuildingType[BuildingType["GROWING_MOTHER"] = 11] = "GROWING_MOTHER";
    BuildingType[BuildingType["REPAIRE_PLANT"] = 12] = "REPAIRE_PLANT";
})(BuildingType = exports.BuildingType || (exports.BuildingType = {}));
exports.default = (_a = {},
    _a[BuildingType.BASE] = {
        size: Tile_1.TileSize.SMALL
    },
    _a[BuildingType.SPAWN_POINT] = {},
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
    _a);
