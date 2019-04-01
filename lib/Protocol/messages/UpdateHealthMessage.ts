import {Field, Message, Type} from 'protobufjs';

@Type.d('UpdateHealthMessage')
export default class UpdateHealthMessage extends Message<UpdateHealthMessage> {
  @Field.d(1, 'string') public uid!: string;
  @Field.d(2, 'uint32') public hp!: number;
}
