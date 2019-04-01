import { Message } from 'protobufjs';
import TileInfoMessage from './submessages/TileInfoMessage';
export default class UpdateTileMessage extends Message<UpdateTileMessage> {
    tiles: {
        [K in string]: TileInfoMessage;
    };
}
