import { Message } from 'protobufjs';
import AxialMessage from './submessages/AxialMessage';
import { BuildingType } from '../../Game';
export default class TryBuildMessage extends Message<TryBuildMessage> {
    axialCoords: AxialMessage[];
    buildingType: BuildingType;
}
