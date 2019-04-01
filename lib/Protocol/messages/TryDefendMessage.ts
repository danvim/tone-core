import {Field, Message, Type} from 'protobufjs';
import Cartesian2Message from './submessages/Cartesian2Message';

@Type.d('TryDefendMessage')
export default class TryDefendMessage extends Message<TryDefendMessage> {
  @Field.d(1, 'string') public sourceUid!: string;
  @Field.d(2, Cartesian2Message) public targetLocation!: Cartesian2Message;
}
