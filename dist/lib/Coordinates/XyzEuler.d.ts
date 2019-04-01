import CoordinatesInterface from './CoordinatesInterface';
export default class XyzEuler implements CoordinatesInterface<XyzEuler> {
    static readonly origin: XyzEuler;
    readonly asArray: number[];
    readonly asString: string;
    static fromArray(a: [number, number, number]): XyzEuler;
    static fromString(s: string): XyzEuler;
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    add(coords: XyzEuler): XyzEuler;
    scale(n: number): XyzEuler;
}
