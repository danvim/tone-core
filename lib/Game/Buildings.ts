import {PlayerType} from './Players';

export enum BuildingType {
  BASE,
  SPAWN_POINT,
  RECLAIMATOR,
  STRUCT_GENERATOR,
  TRAINING_DATA_GENERATOR,
  PRIME_DATA_GENERATOR,
  SHIELD_GENERATOR,
  BARRACK_0,
  BARRACK_1,
  BARRACK_2,
  GROWING_PLANT,
  GROWING_MOTHER,
  MOTHER,
  ATTACK_PLANT_SR0,
  ATTACK_PLANT_SR1,
  ATTACK_PLANT_LR2,
  ATTACK_PLANT_LR3,
  REPAIR_PLANT,
}

export interface BuildingInfo {
  buildingType: BuildingType;
  playerType: PlayerType;
  playerId: number
}
