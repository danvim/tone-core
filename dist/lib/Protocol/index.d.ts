/// <reference types="peerjs" />
import { PackageType } from './PackageType';
import Conn = PeerJs.DataConnection;
declare type ProtocolCallback = (data: any, conn: Conn) => any;
declare class Protocol {
    static PackageType: typeof PackageType;
    static encode(event: PackageType, object: object): any;
    static decode(data: Uint8Array): any;
    conns: Conn[];
    listeners: {
        [type: number]: ProtocolCallback;
    };
    constructor();
    add(conn: Conn): void;
    on(event: PackageType, callback: ProtocolCallback): void;
    emit(event: PackageType, object: object): void;
    send(buff: Uint8Array): void;
}
export { PackageType, Protocol };
export * from './messages';
