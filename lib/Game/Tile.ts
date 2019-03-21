export enum TileType {
  EMPTY,
  VOID,
  POOL,
  HALL
}

export type TileInfo = {
  type: TileType;
  height?: number;
};

export type TileMap = { [K in string]: TileInfo };
