/// <reference types="peerjs" />
import { PackageType } from './PackageType';
import Conn = PeerJs.DataConnection;
import { Message } from 'protobufjs';
declare type ProtocolCallback = (data: Message<any>, conn: Conn) => void;
declare class Protocol {
    static PackageType: typeof PackageType;
    static encode(packageType: PackageType, object: any): Uint8Array;
    static decode(data: Uint8Array): Message<any>;
    conns: Conn[];
    listeners: {
        [type: number]: ProtocolCallback;
    };
    constructor();
    add(conn: Conn): void;
    on(packageType: PackageType, callback: ProtocolCallback): void;
    emit(packageType: PackageType, object: object): void;
    send(buff: Uint8Array): void;
}
export { PackageType, Protocol };
export * from './messages';
