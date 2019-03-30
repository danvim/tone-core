import { PackageTypes } from "./PackageTypes";
import Conn = PeerJs.DataConnection;
var aconcat = require("arraybuffer-concat");
// import Peer from Peer.
const Protobuf = require("./Protobuf").default;

type ProtocolCallback = (data: object) => any;

export class Protocol {
  conns: Array<Conn>;
  listeners: { [type: number]: ProtocolCallback };
  constructor() {
    this.conns = [];
    this.listeners = [];
  }
  add(conn: Conn) {
    conn.on("data", (data: Uint8Array) => {
      // console.log("ondata", data);
      const event = new Uint8Array(data.slice(0, 1))[0];
      // console.log("recieved", type, this.listeners[type]);
      if (typeof this.listeners[event] == typeof (() => {})) {
        const buf = new Uint8Array(data.slice(1));
        // console.log("called", PackageTypes[type], buf);
        const decoded = Protobuf.decoder["decode" + PackageTypes[event]](buf);
        this.listeners[event](decoded);
      }
    });
    this.conns.push(conn);
  }
  on(event: number, callback: ProtocolCallback) {
    // console.log("on", event);
    this.listeners[event] = callback;
  }
  emit(event: PackageTypes, object: Object) {
    const buf = Protobuf.encoder["encode" + PackageTypes[event]](object);
    this.send(aconcat(new Uint8Array([event]), buf));
  }
  send(buff: Uint8Array) {
    // console.log("send", buff);
    this.conns.forEach(conn => conn.send(buff));
  }
  AssignId(playerId: number) {
    const buf = Protobuf.encoder.encodeAssignId({ playerId });
    // console.log(buf);
    this.send(aconcat(new Uint8Array([PackageTypes.AssignId]), buf));
  }
  Build(
    playerId: number,
    uid: string,
    buildingType: number,
    targetX: number,
    targetY: number
  ) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.Build]),
        Protobuf.encoder.encodeBuild({
          playerId,
          uid,
          buildingType,
          targetX,
          targetY
        })
      )
    );
  }
  Customize(Customization: { race: number; map: number }) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.Customize]),
        Protobuf.encoder.encodeCustomize(Customization)
      )
    );
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
      aconcat(
        new Uint8Array([PackageTypes.EntityMove]),
        Protobuf.encoder.encodeEntityMove({
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
      )
    );
  }
  Message(content: string) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.Message]),
        Protobuf.encoder.encodeMessage({ content })
      )
    );
  }
  MoveUnit(uid: string, targetX: number, targetY: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.MoveUnit]),
        Protobuf.encoder.encodeMoveUnit({ uid, targetX, targetY })
      )
    );
  }
  StartGame() {
    this.send(PackageTypes.StartGame + Protobuf.encoder.encodeStartGame());
  }
  SetAnimation(uid: string, animType: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.SetAnimation]),
        Protobuf.encoder.encodeSetAnimation({ uid, animType })
      )
    );
  }
  TryAttack(sourceUid: string, targetUid: string) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.TryAttack]),
        Protobuf.encoder.encodeTryAttack({ sourceUid, targetUid })
      )
    );
  }
  TryBuild(x: number, y: number, buildingType: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.TryBuild]),
        Protobuf.encoder.encodeTryBuild({ x, y, buildingType })
      )
    );
  }
  TryCustomize(Customization: { race: number; map: number }) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.TryCustomize]),
        Protobuf.encoder.encodeTryCustomize(Customization)
      )
    );
  }
  TryDefend(sourceUid: string, targetX: number, targetY: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.TryDefend]),
        Protobuf.encoder.encodeTryDefend(sourceUid, targetX, targetY)
      )
    );
  }
  TryJoinLobby(username: string) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.TryJoinLobby]),
        Protobuf.encoder.encodeTryJoinLobby({ username })
      )
    );
  }
  TrySetPolicy(policyId: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.TrySetPolicy]),
        Protobuf.encoder.encodeTrySetPolicy({ policyId })
      )
    );
  }
  TryStartGame() {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.TryStartGame]),
        Protobuf.encoder.encodeTryStartGame()
      )
    );
  }
  UpdateHealth(uid: string, hp: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.UpdateHealth]),
        Protobuf.encoder.encodeUpdateHealth({ uid, hp })
      )
    );
  }
  UpdateLobby(playerId: number, username: string) {
    this.send(
      aconcat(
        new Uint8Array([PackageTypes.UpdateLobby]),
        Protobuf.encoder.encodeUpdateLobby({ playerId, username })
      )
    );
  }
}

export default Protocol;
