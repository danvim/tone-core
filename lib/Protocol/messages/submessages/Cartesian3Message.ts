import {Field, Message} from 'protobufjs';

export default class Cartesian3Message extends Message<Cartesian3Message> {
  @Field.d(1, 'int32') public x!: number;
  @Field.d(2, 'int32') public y!: number;
  @Field.d(3, 'int32') public z!: number;
}
