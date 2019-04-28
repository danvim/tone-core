import { Message } from 'protobufjs';
import { Cartesian } from '../../../Coordinates';
export default class Cartesian3Message extends Message<Cartesian3Message> {
    x: number;
    y: number;
    z: number;
    toCartesian(): Cartesian;
}
