export enum TileType {
  EMPTY,
  VOID,
  INFORMATION_CLUSTER,
  MOUNTAIN,
  WIRES
}

export interface TileInfo {
  type: TileType;
  height: number;
}

export type TileMap = { [k in string]: TileInfo };
