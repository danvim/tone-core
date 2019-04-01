import { Message } from 'protobufjs';
export default class TryAttackMessage extends Message<TryAttackMessage> {
    sourceUid: string;
    targetUid: string;
}
