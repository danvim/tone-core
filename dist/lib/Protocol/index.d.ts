/// <reference types="peerjs" />
import { PackageType } from './PackageType';
import Conn = PeerJs.DataConnection;
declare type ProtocolCallback = (data: any, conn: Conn) => any;
declare class Protocol {
    static PackageType: typeof PackageType;
    conns: Conn[];
    listeners: {
        [type: number]: ProtocolCallback;
    };
    constructor();
    add(conn: Conn): void;
    on(event: PackageType, callback: ProtocolCallback): void;
    emit(event: PackageType, object: object): void;
    send(buff: Uint8Array): void;
    decode(data: Uint8Array): any;
    encode(event: PackageType, object: object): any;
    AssignId(playerId: number): void;
    Build(playerId: number, uid: string, buildingType: number, axialCoords: string): void;
    Customize(Customization: {
        race: number;
        map: number;
    }): void;
    MoveEntity(uid: string, x: number, y: number, z: number, yaw: number, pitch: number, vx: number, vy: number, vz: number): void;
    Message(content: string): void;
    StartGame(): void;
    SetAnimation(uid: string, animType: number): void;
    TryAttack(sourceUid: string, targetUid: string): void;
    TryBuild(axialCoords: string, buildingType: number): void;
    TryCustomize(Customization: {
        race: number;
        map: number;
    }): void;
    TryDefend(sourceUid: string, targetX: number, targetY: number): void;
    TryJoinLobby(username: string): void;
    TrySetPolicy(policyId: number): void;
    TryStartGame(): void;
    UpdateHealth(uid: string, hp: number): void;
    UpdateLobby(playerId: number, username: string): void;
}
export { PackageType, Protocol };
