import {Field, Message, Type} from 'protobufjs';

@Type.d('CartesianMessage')
export default class CartesianMessage extends Message<CartesianMessage> {
  @Field.d(1, 'int32') public x!: number;
  @Field.d(2, 'int32') public y!: number;
  @Field.d(3, 'int32') public z!: number;
}
