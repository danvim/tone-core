import {Field, Message, Type} from 'protobufjs';
import {Race} from '../../Game';

@Type.d('TryCustomizeMessage')
export default class TryCustomizeMessage extends Message<TryCustomizeMessage> {
  @Field.d(1, Race) public race!: Race;
}
