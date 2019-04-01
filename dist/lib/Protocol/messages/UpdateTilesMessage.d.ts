import { Message } from 'protobufjs';
import TileInfoMessage from './submessages/TileInfoMessage';
export default class UpdateTilesMessage extends Message<UpdateTilesMessage> {
    tiles: {
        [K in string]: TileInfoMessage;
    };
}
