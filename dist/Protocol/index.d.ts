/// <reference types="peerjs" />
import Conn = PeerJs.DataConnection;
declare type ProtocolCallback = (data: object) => any;
export declare class Protocol {
    conn: Conn;
    listeners: {
        [type: number]: ProtocolCallback;
    };
    constructor(conn: Conn);
    init(): Promise<void>;
    on(event: number, callback: ProtocolCallback): void;
    TryJoinLobby(username: string): void;
    TryCustomize(Customization: object): void;
    TryStartGame(): void;
}
export {};
