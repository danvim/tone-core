import {Field, Message, Type} from 'protobufjs';
import CartesianMessage from './submessages/CartesianMessage';

@Type.d('MoveEntityMessage')
export default class MoveEntityMessage extends Message<MoveEntityMessage> {
  @Field.d(1, 'string') public uid!: string;
  @Field.d(2, CartesianMessage) public location!: CartesianMessage;
  @Field.d(3, 'double') public yaw!: string;
  @Field.d(4, 'double') public pitch!: string;
  @Field.d(5, CartesianMessage) public velocity!: CartesianMessage;
}
