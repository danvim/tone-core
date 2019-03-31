import CoordinatesInterface from './CoordinatesInterface';
export default class Cartesian implements CoordinatesInterface<Cartesian> {
    static readonly origin: Cartesian;
    readonly asArray: number[];
    readonly asString: string;
    static neighbors: Cartesian[];
    static fromArray(a: [number, number]): Cartesian;
    static fromString(s: string): Cartesian;
    x: number;
    y: number;
    constructor(x: number, y: number);
    add(coords: Cartesian): Cartesian;
    scale(n: number): Cartesian;
    euclideanDistance(t: Cartesian): number;
    tileDistance(t: Cartesian): number;
}
