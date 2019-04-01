import { ThingInterface } from './Thing';
import { Cartesian, XyzEuler } from '../Coordinates';

export interface EntityInterface extends ThingInterface {
  position: Cartesian;
  rotation: XyzEuler;
}

export enum EntityType {
  WORKER,
  SOLDIER_0,
  SOLDIER_1,
  SOLDIER_2,
  SEED,
  ENEMY_0,
  ENEMY_1,
  ENEMY_2,
  BULLET_0,
  BULLET_1,
  BULLET_2,
}
