import { Message } from 'protobufjs';
import { Axial } from '../../../Coordinates';
export default class AxialMessage extends Message<AxialMessage> {
    q: number;
    r: number;
    toAxial(): Axial;
}
