import { MapField, Message, Type } from 'protobufjs';
import TileInfoMessage from './submessages/TileInfoMessage';

@Type.d('UpdateTilesMessage')
export default class UpdateTilesMessage extends Message<UpdateTilesMessage> {
  @MapField.d(1, 'string', TileInfoMessage) public tiles!: {
    [K in string]: TileInfoMessage
  };
}
