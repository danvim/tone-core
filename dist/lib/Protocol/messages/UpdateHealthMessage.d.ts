import { Message } from 'protobufjs';
export default class UpdateHealthMessage extends Message<UpdateHealthMessage> {
    uid: string;
    hp: number;
}
