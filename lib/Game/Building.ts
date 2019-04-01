import { TileSize } from './Tile';
import { ThingInterface } from './Thing';
import { Axial } from '../Coordinates';

export enum BuildingType {
  BASE,
  SPAWN_POINT,
  STRUCT_GENERATOR,
  RECLAIMATOR,
  BARRACK,
  TRAINING_DATA_GENERATOR,
  PRIME_DATA_GENERATOR,
  SHIELD_GENERATOR,
  ATTACK_PLANT,
  GROWING_PLANT,
  GROWING_MOTHER,
  REPAIR_PLANT,
}

interface BuildingPropertyInterface {
  size: number;
  struct: number;
}

export const BuildingProperty: {
  [k in BuildingType]: BuildingPropertyInterface
} = {
  [BuildingType.BASE]: {
    size: TileSize.SMALL,
    struct: 0,
  },
  [BuildingType.SPAWN_POINT]: {
    size: TileSize.SMALL,
    struct: 0,
  },
  [BuildingType.STRUCT_GENERATOR]: {
    size: TileSize.SMALL,
    struct: 5,
  },
  [BuildingType.RECLAIMATOR]: {
    size: TileSize.SMALL,
    struct: 5,
  },
  [BuildingType.BARRACK]: {
    size: TileSize.LARGE,
    struct: 5,
  },
  [BuildingType.TRAINING_DATA_GENERATOR]: {
    size: TileSize.SMALL,
    struct: 5,
  },
  [BuildingType.PRIME_DATA_GENERATOR]: {
    size: TileSize.SMALL,
    struct: 5,
  },
  [BuildingType.SHIELD_GENERATOR]: {
    size: TileSize.SMALL,
    struct: 5,
  },
  [BuildingType.ATTACK_PLANT]: {
    size: TileSize.SMALL,
    struct: 5,
  },
  [BuildingType.GROWING_PLANT]: {
    size: TileSize.SMALL,
    struct: 5,
  },
  [BuildingType.GROWING_MOTHER]: {
    size: TileSize.SMALL,
    struct: 5,
  },
  [BuildingType.REPAIR_PLANT]: {
    size: TileSize.SMALL,
    struct: 5,
  },
};

export interface BuildingInterface extends ThingInterface {
  buildingType: BuildingType;
  tilePosition: Axial;
}
