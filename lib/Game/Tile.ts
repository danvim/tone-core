export enum TileType {
  EMPTY,
  VOID,
  POOL,
  HALL
}

export enum TileSize {
  SMALL,
  LARGE
}

export type TileInfo = {
  type: TileType;
  height?: number;
};

export type TileMap = { [K in string]: TileInfo };
