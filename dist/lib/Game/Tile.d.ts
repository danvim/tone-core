export declare const TILE_SIZE: number;
export declare const TILE_WIDTH: number;
export declare const TILE_HEIGHT: number;
export declare const LEVEL_HEIGHT: number;
export declare enum TileType {
    VOID = 0,
    EMPTY = 1,
    INFORMATION_CLUSTER = 2,
    MOUNTAIN = 3,
    WIRES = 4
}
export declare enum TileSize {
    SMALL = 0,
    LARGE = 1
}
export interface TileInfo {
    type: TileType;
    height: number;
}
export declare type TileMap = {
    [k in string]: TileInfo;
};
