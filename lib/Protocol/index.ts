import {getPackageClass, PackageType} from './PackageType';
import Conn = PeerJs.DataConnection;
import {Message} from 'protobufjs';
// tslint:disable-next-line:no-var-requires
const aconcat = require('arraybuffer-concat');

type ProtocolCallback = (data: Message<any>, conn: Conn) => void;

class Protocol {
  public static PackageType = PackageType;
  public static encode(packageType: PackageType, object: object): Uint8Array {
    return aconcat(new Uint8Array([packageType]), getPackageClass(packageType).encode(object).finish());
  }
  public static decode(data: Uint8Array): Message<any> {
    const buf = data.slice(1);
    return getPackageClass(new DataView(data).getUint8(0)).decode(new Uint8Array(buf));
  }
  public conns: Conn[];
  public listeners: { [type: number]: ProtocolCallback };
  constructor() {
    this.conns = [];
    this.listeners = [];
  }
  public add(conn: Conn) {
    conn.on('data', (data: Uint8Array) => {
      const packageType = new DataView(data).getUint8(0);
      if (typeof this.listeners[packageType] === 'function') {
        this.listeners[packageType](Protocol.decode(data), conn);
      }
    });
    this.conns.push(conn);
  }
  public on(packageType: PackageType, callback: ProtocolCallback) {
    this.listeners[packageType] = callback;
  }
  public emit(packageType: PackageType, object: object) {
    this.send(Protocol.encode(packageType, object));
  }
  public send(buff: Uint8Array) {
    this.conns.forEach((conn) => conn.send(buff));
  }
}

export { PackageType, Protocol };
export * from './messages';
