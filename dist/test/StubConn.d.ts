/// <reference types="peerjs" />
import Conn = PeerJs.DataConnection;
export declare class StubConn implements Conn {
    dataChannel: RTCDataChannel;
    label: string;
    metadata: any;
    open: boolean;
    peerConnection: any;
    peer: string;
    reliable: boolean;
    serialization: string;
    type: string;
    buffSize: number;
    partner: StubConn | undefined;
    onSend: ((data: any) => any) | undefined;
    onClose: (() => any) | undefined;
    onOpen: (() => any) | undefined;
    onData: Array<(data: any) => any>;
    connect(p: StubConn): void;
    disconnect(): void;
    send(data: any): void;
    close(): void;
    on(event: string | 'open' | 'close', cb: () => void): void;
    on(event: 'data', cb: (data: any) => void): void;
    on(event: 'error', cb: (err: any) => void): void;
    off(event: string, fn: any, once?: boolean | undefined): void;
}
