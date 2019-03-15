export declare enum TileType {
    EMPTY = 0,
    VOID = 1,
    POOL = 2,
    HALL = 3
}
export declare type TileInfo = {
    type: TileType;
    height?: number;
};
export declare type TileMap = {
    [K in string]: TileInfo;
};
