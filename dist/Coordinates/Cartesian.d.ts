import CoordinatesInterface from "./CoordinatesInterface";
export default class Cartesian implements CoordinatesInterface<Cartesian> {
    x: number;
    y: number;
    static neighbors: Cartesian[];
    static readonly origin: Cartesian;
    static fromArray(a: [number, number]): Cartesian;
    static fromString(s: string): Cartesian;
    constructor(x: number, y: number);
    readonly asArray: number[];
    readonly asString: string;
    add(coords: Cartesian): Cartesian;
    scale(n: number): Cartesian;
    euclideanDistance(t: Cartesian): number;
    tileDistance(t: Cartesian): number;
}
