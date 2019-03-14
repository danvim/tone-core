import Axial from "./Axial";
import CoordinatesInterface from "./CoordinatesInterface";
export default class HexCube implements CoordinatesInterface<HexCube> {
    x: number;
    y: number;
    z: number;
    static neighbors: HexCube[];
    static readonly origin: HexCube;
    static fromArray(a: [number, number, number]): HexCube;
    static fromString(s: string): HexCube;
    constructor(x: number, y: number, z: number);
    toAxial(): Axial;
    readonly asArray: number[];
    readonly asString: string;
    add(hexCube: HexCube): HexCube;
    scale(n: number): HexCube;
    tileDistance(t: HexCube): number;
}
