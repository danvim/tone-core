export enum TileType {
  VOID,
  EMPTY,
  INFORMATION_CLUSTER,
  MOUNTAIN,
  WIRES,
}

export enum TileSize {
  SMALL,
  LARGE,
}

export interface TileInfo {
  type: TileType;
  height: number;
}

export type TileMap = { [k in string]: TileInfo };
