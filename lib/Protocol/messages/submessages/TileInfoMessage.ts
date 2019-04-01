import {Field, Message} from 'protobufjs';
import {TileInfo, TileType} from '../../../Game';

export default class TileInfoMessage extends Message<TileInfoMessage> {
  @Field.d(1, TileType) public type!: TileType;
  @Field.d(2, 'int32') public height!: number;

  public toTileInfo(): TileInfo {
    return {
      type: this.type,
      height: this.height,
    };
  }
}
