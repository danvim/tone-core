import { Message } from 'protobufjs';
import { AnimType } from '../../Game';
export default class SetAnimMessage extends Message<SetAnimMessage> {
    uid: string;
    animType: AnimType;
}
