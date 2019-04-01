import { Message } from 'protobufjs';
import { BuildingType } from '../../Game';
import AxialMessage from './submessages/AxialMessage';
export default class BuildMessage extends Message<BuildMessage> {
    playerId: number;
    uid: string;
    buildingType: BuildingType;
    axialCoords: AxialMessage[];
    progress: number;
}
