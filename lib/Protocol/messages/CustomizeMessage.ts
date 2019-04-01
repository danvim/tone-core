import {Field, Message, Type} from 'protobufjs';
import {Race} from '../../Game';

@Type.d('CustomizeMessage')
export default class CustomizeMessage extends Message<CustomizeMessage> {
  @Field.d(1, Race) public race!: Race;
  @Field.d(2, 'int32') public playerId!: number;
}
