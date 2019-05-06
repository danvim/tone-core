import { Field, Message, Type } from 'protobufjs';

@Type.d('UpdateResourceStorageMessage')
export default class UpdateResourceStorageMessage extends Message<
  UpdateResourceStorageMessage
> {
  @Field.d(1, 'string') public uid!: string;
  @Field.d(2, 'in32') public struct!: number;
  @Field.d(3, 'in32') public trainingData!: number;
  @Field.d(4, 'in32') public primeData!: number;
}
