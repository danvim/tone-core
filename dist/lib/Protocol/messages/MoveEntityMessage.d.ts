import { Message } from 'protobufjs';
import CartesianMessage from './submessages/CartesianMessage';
export default class MoveEntityMessage extends Message<MoveEntityMessage> {
    uid: string;
    location: CartesianMessage;
    yaw: string;
    pitch: string;
    velocity: CartesianMessage;
}
