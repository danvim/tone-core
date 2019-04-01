import {Field, Message} from 'protobufjs';
import {Axial} from '../../../Coordinates';

export default class AxialMessage extends Message<AxialMessage> {
  @Field.d(1, 'int32') public q!: number;
  @Field.d(2, 'int32') public r!: number;

  public toAxial(): Axial {
    return new Axial(this.q, this.r);
  }
}
