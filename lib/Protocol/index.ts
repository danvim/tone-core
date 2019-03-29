import { PackageTypes } from "./PackageTypes";
import Conn = PeerJs.DataConnection;
// import Peer from Peer.
const Protobuf = require("./Protobuf");

type ProtocolCallback = (data: object) => any;

export class Protocol {
  conns: Array<Conn>;
  listeners: { [type: number]: ProtocolCallback };
  constructor() {
    this.conns = [];
    this.listeners = [];
  }
  add(conn: Conn) {
    conn.on("data", (data: ArrayBuffer) => {
      const type = data.slice(0, 1);
      this.listeners[Number(type)](data.slice(1));
    });
    this.conns.push(conn);
  }
  on(event: number, callback: ProtocolCallback) {
    this.listeners[event] = callback;
  }
  send(buff: ArrayBuffer) {
    this.conns.forEach(conn => conn.send(buff));
  }
  AssignId(playerId: number) {
    this.send(PackageTypes.AssignId + Protobuf.encodeAssignId({ playerId }));
  }
  Build(
    playerId: number,
    uid: string,
    buildingType: number,
    targetX: number,
    targetY: number
  ) {
    this.send(
      PackageTypes.Build +
        Protobuf.encodeBuild({ playerId, uid, buildingType, targetX, targetY })
    );
  }
  Customize(Customization: { race: number; map: number }) {
    this.send(PackageTypes.Customize + Protobuf.encodeCustomize(Customization));
  }
  EntityMove(
    uid: string,
    x: number,
    y: number,
    z: number,
    yaw: number,
    pitch: number,
    vx: number,
    vy: number,
    vz: number
  ) {
    this.send(
      PackageTypes.EntityMove +
        Protobuf.encodeEntityMove({
          uid,
          x,
          y,
          z,
          yaw,
          pitch,
          vx,
          vy,
          vz
        })
    );
  }
  Message(content: string) {
    this.send(PackageTypes.Message + Protobuf.encodeMessage({ content }));
  }
  MoveUnit(uid: string, targetX: number, targetY: number) {
    this.send(
      PackageTypes.MoveUnit + Protobuf.encodeMoveUnit({ uid, targetX, targetY })
    );
  }
  StartGame() {
    this.send(PackageTypes.StartGame + Protobuf.encodeStartGame());
  }
  SetAnimation(uid: string, animType: number) {
    this.send(
      PackageTypes.SetAnimation + Protobuf.encodeSetAnimation({ uid, animType })
    );
  }
  TryAttack(sourceUid: string, targetUid: string) {
    this.send(
      PackageTypes.TryAttack +
        Protobuf.encodeTryAttack({ sourceUid, targetUid })
    );
  }
  TryBuild(x: number, y: number, buildingType: number) {
    this.send(
      PackageTypes.TryBuild + Protobuf.encodeTryBuild({ x, y, buildingType })
    );
  }
  TryCustomize(Customization: { race: number; map: number }) {
    this.send(
      PackageTypes.TryCustomize + Protobuf.encodeTryCustomize(Customization)
    );
  }
  TryDefend(sourceUid: string, targetX: number, targetY: number) {
    this.send(
      PackageTypes.TryDefend +
        Protobuf.encodeTryDefend(sourceUid, targetX, targetY)
    );
  }
  TryJoinLobby(username: string) {
    this.send(
      PackageTypes.TryJoinLobby + Protobuf.encodeTryJoinLobby({ username })
    );
  }
  TrySetPolicy(policyId: number) {
    this.send(
      PackageTypes.TrySetPolicy + Protobuf.encodeTrySetPolicy({ policyId })
    );
  }
  TryStartGame() {
    this.send(PackageTypes.TryStartGame + Protobuf.encodeTryStartGame());
  }
  UpdateHealth(uid: string, hp: number) {
    this.send(
      PackageTypes.UpdateHealth + Protobuf.encodeUpdateHealth({ uid, hp })
    );
  }
  UpdateLobby(playerId: number, username: string) {
    this.send(
      PackageTypes.UpdateLobby +
        Protobuf.encodeUpdateLobby({ playerId, username })
    );
  }
}

export default Protocol;
