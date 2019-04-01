import { Message } from 'protobufjs';
import Cartesian2Message from './submessages/Cartesian2Message';
export default class TryDefendMessage extends Message<TryDefendMessage> {
    sourceUid: string;
    targetLocation: Cartesian2Message;
}
