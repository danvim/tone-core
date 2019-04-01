import CoordinatesInterface from './CoordinatesInterface';
export default class XyzEuler implements CoordinatesInterface<XyzEuler> {
  static get origin() {
    return new XyzEuler(0, 0, 0);
  }

  get asArray(): number[] {
    return [this.x, this.y, this.z];
  }

  get asString(): string {
    return this.asArray.join(',');
  }

  public static fromArray(a: [number, number, number]): XyzEuler {
    return new XyzEuler(...a);
  }

  public static fromString(s: string): XyzEuler {
    const a = s.split(',').map((i: string) => parseInt(i, 10));
    return XyzEuler.fromArray([a[0], a[1], a[2]]);
  }
  public x: number;
  public y: number;
  public z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public add(coords: XyzEuler): XyzEuler {
    this.x += coords.x;
    this.y += coords.y;
    this.z += coords.z;
    return this;
  }

  public scale(n: number): XyzEuler {
    this.x *= n;
    this.y *= n;
    this.z *= n;
    return this;
  }
}
