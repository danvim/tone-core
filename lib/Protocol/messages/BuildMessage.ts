import {Field, Message, Type} from 'protobufjs';
import {BuildingType} from '../../Game';
import AxialMessage from './submessages/AxialMessage';

@Type.d('BuildMessage')
export default class BuildMessage extends Message<BuildMessage> {
  @Field.d(1, 'int32') public playerId!: number;
  @Field.d(2, 'string') public uid!: string;
  @Field.d(3, BuildingType) public buildingType!: BuildingType;
  @Field.d(4, AxialMessage, 'repeated') public axialCoords!: AxialMessage[];
  @Field.d(5, 'uint32') public progress!: number;
}
