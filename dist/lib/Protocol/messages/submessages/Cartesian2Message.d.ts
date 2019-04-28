import { Message } from 'protobufjs';
import { Cartesian } from '../../../Coordinates';
export default class Cartesian2Message extends Message<Cartesian2Message> {
    x: number;
    z: number;
    toCartesian(): Cartesian;
}
