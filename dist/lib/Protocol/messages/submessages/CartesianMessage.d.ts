import { Message } from 'protobufjs';
export default class CartesianMessage extends Message<CartesianMessage> {
    x: number;
    y: number;
    z: number;
}
