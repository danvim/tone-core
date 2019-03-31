"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TILE_SIZE = 20;
exports.TILE_WIDTH = Math.sqrt(3) * exports.TILE_SIZE;
exports.TILE_HEIGHT = 2 * exports.TILE_SIZE;
exports.LEVEL_HEIGHT = 5;
var TileType;
(function (TileType) {
    TileType[TileType["VOID"] = 0] = "VOID";
    TileType[TileType["EMPTY"] = 1] = "EMPTY";
    TileType[TileType["INFORMATION_CLUSTER"] = 2] = "INFORMATION_CLUSTER";
    TileType[TileType["MOUNTAIN"] = 3] = "MOUNTAIN";
    TileType[TileType["WIRES"] = 4] = "WIRES";
})(TileType = exports.TileType || (exports.TileType = {}));
var TileSize;
(function (TileSize) {
    TileSize[TileSize["SMALL"] = 0] = "SMALL";
    TileSize[TileSize["LARGE"] = 1] = "LARGE";
})(TileSize = exports.TileSize || (exports.TileSize = {}));
