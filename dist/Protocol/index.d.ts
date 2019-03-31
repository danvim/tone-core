/// <reference types="peerjs" />
import { PackageType } from "./PackageType";
import Conn = PeerJs.DataConnection;
declare type ProtocolCallback = (data: object) => any;
declare class Protocol {
    conns: Array<Conn>;
    listeners: {
        [type: number]: ProtocolCallback;
    };
    static PackageType: typeof PackageType;
    constructor();
    add(conn: Conn): void;
    on(event: number, callback: ProtocolCallback): void;
    emit(event: PackageType, object: Object): void;
    send(buff: Uint8Array): void;
    AssignId(playerId: number): void;
    Build(playerId: number, uid: string, buildingType: number, targetX: number, targetY: number): void;
    Customize(Customization: {
        race: number;
        map: number;
    }): void;
    EntityMove(uid: string, x: number, y: number, z: number, yaw: number, pitch: number, vx: number, vy: number, vz: number): void;
    Message(content: string): void;
    MoveUnit(uid: string, targetX: number, targetY: number): void;
    StartGame(): void;
    SetAnimation(uid: string, animType: number): void;
    TryAttack(sourceUid: string, targetUid: string): void;
    TryBuild(x: number, y: number, buildingType: number): void;
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
export default Protocol;
export { PackageType, Protocol };
