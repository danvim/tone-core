import { Message } from 'protobufjs';
import CartesianMessage from './submessages/CartesianMessage';
import { EntityType } from '../../Game/Entity';
export default class SpawnEntityMessage extends Message<SpawnEntityMessage> {
    uid: string;
    position: CartesianMessage;
    entityType: EntityType;
    playerId: number;
}
