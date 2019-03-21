import HexCube from "./HexCube";
import CoordinatesInterface from "./CoordinatesInterface";
import Cartesian from "./Cartesian";
export default class Axial implements CoordinatesInterface<Axial> {
    q: number;
    r: number;
    static neighbors: Axial[];
    static readonly origin: Axial;
    static fromArray(a: [number, number]): Axial;
    static fromString(s: string): Axial;
    constructor(q: number, r: number);
    toHexCube(): HexCube;
    toCartesian(size: number): Cartesian;
    readonly asArray: number[];
    readonly asString: string;
    add(axial: Axial): Axial;
    scale(n: number): Axial;
    tileDistance(t: Axial): number;
}
