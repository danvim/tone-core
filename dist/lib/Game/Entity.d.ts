import { ThingInterface } from './Thing';
import { Cartesian, XyzEuler } from '../Coordinates';
export interface EntityInterface extends ThingInterface {
    position: Cartesian;
    rotation: XyzEuler;
}
export declare enum EntityType {
    EMPTY = 0,
    WORKER = 1,
    SOLDIER_0 = 2,
    SOLDIER_1 = 3,
    SOLDIER_2 = 4,
    SEED = 5,
    ENEMY_0 = 6,
    ENEMY_1 = 7,
    ENEMY_2 = 8,
    BULLET_0 = 9,
    BULLET_1 = 10,
    BULLET_2 = 11
}
export declare const EntityProperty: {
    [type: number]: {
        hp: number;
    };
};
