import { Message } from 'protobufjs';
import Cartesian3Message from './submessages/Cartesian3Message';
export default class MoveEntityMessage extends Message<MoveEntityMessage> {
    uid: string;
    location: Cartesian3Message;
    yaw: number;
    pitch: number;
    velocity: Cartesian3Message;
}
