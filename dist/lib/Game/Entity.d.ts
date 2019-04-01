import { ThingInterface } from './Thing';
import { Cartesian, XyzEuler } from '../Coordinates';
export interface EntityInterface extends ThingInterface {
    position: Cartesian;
    rotation: XyzEuler;
}
export declare enum EntityType {
    WORKER = 0,
    SOLDIER_0 = 1,
    SOLDIER_1 = 2,
    SOLDIER_2 = 3,
    SEED = 4,
    ENEMY_0 = 5,
    ENEMY_1 = 6,
    ENEMY_2 = 7,
    BULLET_0 = 8,
    BULLET_1 = 9,
    BULLET_2 = 10
}
