import { Message } from 'protobufjs';
import { TileInfo, TileType } from '../../../Game';
export default class TileInfoMessage extends Message<TileInfoMessage> {
    type: TileType;
    height: number;
    toTileInfo(): TileInfo;
}
