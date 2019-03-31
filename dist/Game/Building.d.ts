import { TileSize } from "./Tile";
export declare enum BuildingType {
    BASE = 0,
    SPAWN_POINT = 1,
    STRUCT_GENERATOR = 2,
    RECLAIMATOR = 3,
    BARRACK = 4,
    TRAINING_DATA_GENERATOR = 5,
    PRIME_DATA_GENERATOR = 6,
    SHIELD_GENERATOR = 7,
    INFORMATION_CLUSTOR = 8,
    ATTACK_PLANT = 9,
    GROWING_PLANT = 10,
    GROWING_MOTHER = 11,
    REPAIRE_PLANT = 12
}
declare const _default: {
    0: {
        size: TileSize;
    };
    1: {};
    2: {
        size: TileSize;
        struct: number;
    };
    3: {
        size: TileSize;
        struct: number;
    };
    4: {
        size: TileSize;
        struct: number;
    };
    5: {
        size: TileSize;
        struct: number;
    };
    6: {
        size: TileSize;
        struct: number;
    };
    7: {
        size: TileSize;
        struct: number;
    };
};
export default _default;
