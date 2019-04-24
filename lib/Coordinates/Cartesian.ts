import CoordinatesInterface from './CoordinatesInterface';

export default class Cartesian implements CoordinatesInterface<Cartesian> {
  static get origin() {
    return new Cartesian(0, 0);
  }

  get asArray(): number[] {
    return [this.x, this.y];
  }

  get asString(): string {
    return this.asArray.join(',');
  }

  public static neighbors: Cartesian[] = [
    new Cartesian(-1, -1),
    new Cartesian(0, -1),
    new Cartesian(1, -1),
    new Cartesian(-1, 0),
    new Cartesian(1, 0),
    new Cartesian(-1, 1),
    new Cartesian(0, 1),
    new Cartesian(1, 1),
  ];

  public static fromArray(a: [number, number]): Cartesian {
    return new Cartesian(...a);
  }

  public static fromString(s: string): Cartesian {
    const a = s.split(',').map((i: string) => parseInt(i, 10));
    return Cartesian.fromArray([a[0], a[1]]);
  }
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public add(coords: Cartesian): Cartesian {
    this.x += coords.x;
    this.y += coords.y;
    return this;
  }

  public scale(n: number): Cartesian {
    this.x *= n;
    this.y *= n;
    return this;
  }

  public euclideanDistance(t: Cartesian): number {
    return Math.sqrt((this.x - t.x) ** 2 + (this.y - t.y) ** 2);
  }

  public tileDistance(t: Cartesian): number {
    return this.x - t.x + (this.y - t.y);
  }

  public added(coord: Cartesian): Cartesian {
    const ret = new Cartesian(this.x, this.y);
    return ret.add(coord);
  }

  public scaled(n: number): Cartesian {
    const ret = new Cartesian(this.x, this.y);
    return ret.scale(n);
  }

  public norm(): number {
    return this.euclideanDistance(Cartesian.origin);
  }

  public normalize(): Cartesian {
    return this.scale(1 / this.norm());
  }

  public normalized(): Cartesian {
    const ret = new Cartesian(this.x, this.y);
    return ret.normalize();
  }

  public clone(): Cartesian {
    return new Cartesian(this.x, this.y);
  }
}
