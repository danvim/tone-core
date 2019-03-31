import { TileSize } from "./Tile";

export enum BuildingType {
  BASE,
  SPAWN_POINT,
  STRUCT_GENERATOR,
  RECLAIMATOR,
  BARRACK,
  TRAINING_DATA_GENERATOR,
  PRIME_DATA_GENERATOR,
  SHIELD_GENERATOR,
  INFORMATION_CLUSTOR,
  ATTACK_PLANT,
  GROWING_PLANT,
  GROWING_MOTHER,
  REPAIRE_PLANT
}

export default {
  [BuildingType.BASE]: {
    size: TileSize.SMALL
  },
  [BuildingType.SPAWN_POINT]: {},
  [BuildingType.STRUCT_GENERATOR]: {
    size: TileSize.SMALL,
    struct: 5
  },
  [BuildingType.RECLAIMATOR]: {
    size: TileSize.SMALL,
    struct: 5
  },
  [BuildingType.BARRACK]: {
    size: TileSize.LARGE,
    struct: 5
  },
  [BuildingType.TRAINING_DATA_GENERATOR]: {
    size: TileSize.SMALL,
    struct: 5
  },
  [BuildingType.PRIME_DATA_GENERATOR]: {
    size: TileSize.SMALL,
    struct: 5
  },
  [BuildingType.SHIELD_GENERATOR]: {
    size: TileSize.SMALL,
    struct: 5
  }
};
