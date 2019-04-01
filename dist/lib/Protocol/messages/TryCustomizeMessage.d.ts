import { Message } from 'protobufjs';
import { Race } from '../../Game';
export default class TryCustomizeMessage extends Message<TryCustomizeMessage> {
    race: Race;
}
