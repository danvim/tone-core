import {Field, Message} from 'protobufjs';

export default class Cartesian2Message extends Message<Cartesian2Message> {
  @Field.d(1, 'int32') public x!: number;
  @Field.d(2, 'int32') public z!: number;
}
