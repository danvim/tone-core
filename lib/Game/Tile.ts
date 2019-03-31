export const TILE_SIZE: number = 20;
export const TILE_WIDTH: number = Math.sqrt(3) * TILE_SIZE;
export const TILE_HEIGHT: number = 2 * TILE_SIZE;
export const LEVEL_HEIGHT: number = 5;

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
