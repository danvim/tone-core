import { Message } from 'protobufjs';
import Cartesian3Message from './submessages/Cartesian3Message';
import { EntityType } from '../../Game';
export default class SpawnEntityMessage extends Message<SpawnEntityMessage> {
    uid: string;
    position: Cartesian3Message;
    entityType: EntityType;
    playerId: number;
}
