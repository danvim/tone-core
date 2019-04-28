import { Field, Message } from 'protobufjs';
import { Cartesian } from '../../../Coordinates';

export default class Cartesian2Message extends Message<Cartesian2Message> {
  @Field.d(1, 'double') public x!: number;
  @Field.d(2, 'double') public z!: number;

  public toCartesian(): Cartesian {
    return new Cartesian(this.x, this.z);
  }
}
