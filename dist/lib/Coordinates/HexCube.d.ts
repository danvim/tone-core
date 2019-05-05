import Axial from './Axial';
import CoordinatesInterface from './CoordinatesInterface';
export default class HexCube implements CoordinatesInterface<HexCube> {
    static readonly origin: HexCube;
    readonly asArray: number[];
    readonly asString: string;
    static neighbors: HexCube[];
    static fromArray(a: [number, number, number]): HexCube;
    static fromString(s: string): HexCube;
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    toAxial(): Axial;
    add(hexCube: HexCube): HexCube;
    scale(n: number): HexCube;
    tileDistance(t: HexCube): number;
    range(r: number): HexCube[];
}
