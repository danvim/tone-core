import { Message } from 'protobufjs';
import { Race } from '../../Game';
export default class CustomizeMessage extends Message<CustomizeMessage> {
    race: Race;
    playerId: number;
}
