import HexCube from './HexCube';
import CoordinatesInterface from './CoordinatesInterface';
import Cartesian from './Cartesian';
export default class Axial implements CoordinatesInterface<Axial> {
    static readonly origin: Axial;
    readonly asArray: number[];
    readonly asString: string;
    static neighbors: Axial[];
    static fromArray(a: [number, number]): Axial;
    static fromString(s: string): Axial;
    q: number;
    r: number;
    constructor(q: number, r: number);
    toHexCube(): HexCube;
    toCartesian(size: number): Cartesian;
    add(axial: Axial): Axial;
    scale(n: number): Axial;
    tileDistance(t: Axial): number;
    range(r: number): Axial[];
}
export { Axial };
