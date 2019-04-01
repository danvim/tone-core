import { Message } from 'protobufjs';
export default class AttackMessage extends Message<AttackMessage> {
    sourceUid: string;
    targetUid: string;
}
