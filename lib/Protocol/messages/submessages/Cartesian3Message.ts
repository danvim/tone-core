import { Field, Message } from 'protobufjs';
import { Cartesian } from '../../../Coordinates';

export default class Cartesian3Message extends Message<Cartesian3Message> {
  @Field.d(1, 'double') public x!: number;
  @Field.d(2, 'double') public y!: number;
  @Field.d(3, 'double') public z!: number;

  public toCartesian(): Cartesian {
    return new Cartesian(this.x, this.z);
  }
}
