import { ThingInterface } from './Thing';
import { Axial } from '../Coordinates';
export declare enum BuildingType {
    BASE = 0,
    SPAWN_POINT = 1,
    STRUCT_GENERATOR = 2,
    RECLAIMATOR = 3,
    BARRACK = 4,
    TRAINING_DATA_GENERATOR = 5,
    PRIME_DATA_GENERATOR = 6,
    SHIELD_GENERATOR = 7,
    ATTACK_PLANT = 8,
    GROWING_PLANT = 9,
    GROWING_MOTHER = 10,
    REPAIR_PLANT = 11
}
interface BuildingPropertyInterface {
    size: number;
    struct: number;
    hp: number;
}
export declare const BuildingProperty: {
    [k in BuildingType]: BuildingPropertyInterface;
};
export interface BuildingInterface extends ThingInterface {
    buildingType: BuildingType;
    tilePosition: Axial;
}
export {};
