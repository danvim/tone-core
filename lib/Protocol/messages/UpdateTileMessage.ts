import {MapField, Message, Type} from 'protobufjs';
import TileInfoMessage from './submessages/TileInfoMessage';

@Type.d('UpdateTileMessage')
export default class UpdateTileMessage extends Message<UpdateTileMessage> {
  @MapField.d(1, 'string', TileInfoMessage) public tiles!: {[K in string]: TileInfoMessage};
}
