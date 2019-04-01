import {Field, Message, Type} from 'protobufjs';
import AxialMessage from './submessages/AxialMessage';
import {BuildingType} from '../../Game';

@Type.d('TryBuildMessage')
export default class TryBuildMessage extends Message<TryBuildMessage> {
  @Field.d(1, AxialMessage, 'repeated') public axialCoords!: AxialMessage[];
  @Field.d(2, BuildingType) public buildingType!: BuildingType;
}
