import {PackageType} from './PackageType';
import {UPPER_SNAKE2UpperCamel} from '../helper';
import Conn = PeerJs.DataConnection;
// tslint:disable-next-line:no-var-requires
const aconcat = require('arraybuffer-concat');
// import Peer from Peer.
// tslint:disable-next-line:no-var-requires
const Protobuf = require('./Protobuf').default;

type ProtocolCallback = (data: any, conn: Conn) => any;

class Protocol {
  public static PackageType = PackageType;
  public static encode(event: PackageType, object: object) {
    const buf = Protobuf.encoder[
      'encode' + UPPER_SNAKE2UpperCamel(PackageType[event])
    ](object);
    return aconcat(new Uint8Array([event]), buf);
  }
  public static decode(data: Uint8Array) {
    const event = new Uint8Array(data.slice(0, 1))[0];
    const buf = new Uint8Array(data.slice(1));
    return Protobuf.decoder[
    'decode' + UPPER_SNAKE2UpperCamel(PackageType[event])
      ](buf);
  }
  public conns: Conn[];
  public listeners: { [type: number]: ProtocolCallback };
  constructor() {
    this.conns = [];
    this.listeners = [];
  }
  public add(conn: Conn) {
    conn.on('data', (data: Uint8Array) => {
      const event = new Uint8Array(data.slice(0, 1))[0];
      if (typeof this.listeners[event] === 'function') {
        const buf = new Uint8Array(data.slice(1));
        const decoded = Protobuf.decoder[
          'decode' + UPPER_SNAKE2UpperCamel(PackageType[event])
        ](buf);
        this.listeners[event](decoded, conn);
      }
    });
    this.conns.push(conn);
  }
  public on(event: PackageType, callback: ProtocolCallback) {
    this.listeners[event] = callback;
  }
  public emit(event: PackageType, object: object) {
    this.send(Protocol.encode(event, object));
  }
  public send(buff: Uint8Array) {
    this.conns.forEach((conn) => conn.send(buff));
  }
}

export { PackageType, Protocol };
export * from './messages';
