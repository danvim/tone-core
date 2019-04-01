import {Field, Message, Type} from 'protobufjs';
import {AnimType} from '../../Game';

@Type.d('SetAnimationMessage')
export default class SetAnimMessage extends Message<SetAnimMessage> {
  @Field.d(1, 'string') public uid!: string;
  @Field.d(2, AnimType) public animType!: AnimType;
}
