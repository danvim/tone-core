import {Field, Message, Type} from 'protobufjs';
import Cartesian3Message from './submessages/Cartesian3Message';

@Type.d('MoveEntityMessage')
export default class MoveEntityMessage extends Message<MoveEntityMessage> {
  @Field.d(1, 'string') public uid!: string;
  @Field.d(2, Cartesian3Message) public location!: Cartesian3Message;
  @Field.d(3, 'double') public yaw!: string;
  @Field.d(4, 'double') public pitch!: string;
  @Field.d(5, Cartesian3Message) public velocity!: Cartesian3Message;
}
