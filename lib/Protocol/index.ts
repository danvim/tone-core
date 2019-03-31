import { PackageType } from "./PackageType";
import Conn = PeerJs.DataConnection;
var aconcat = require("arraybuffer-concat");
// import Peer from Peer.
const Protobuf = require("./Protobuf").default;
import { UPPER_SNAKE2UpperCamel } from "../helper";

type ProtocolCallback = (data: object) => any;

class Protocol {
  conns: Array<Conn>;
  listeners: { [type: number]: ProtocolCallback };
  static PackageType = PackageType;
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
        // console.log("called", PackageType[type], buf);
        // console.log(
        //   event,
        //   PackageType[event],
        //   "decode" + UPPER_SNAKE2UpperCamel(PackageType[event])
        // );
        const decoded = Protobuf.decoder[
          "decode" + UPPER_SNAKE2UpperCamel(PackageType[event])
        ](buf);
        this.listeners[event](decoded);
      }
    });
    this.conns.push(conn);
  }
  on(event: PackageType, callback: ProtocolCallback) {
    // console.log("on", event);
    this.listeners[event] = callback;
  }
  emit(event: PackageType, object: Object) {
    // console.log(
    //   event,
    //   PackageType[event],
    //   "encode" + UPPER_SNAKE2UpperCamel(PackageType[event])
    // );
    const buf = Protobuf.encoder[
      "encode" + UPPER_SNAKE2UpperCamel(PackageType[event])
    ](object);
    this.send(aconcat(new Uint8Array([event]), buf));
  }
  send(buff: Uint8Array) {
    // console.log("send", buff);
    this.conns.forEach(conn => conn.send(buff));
  }
  AssignId(playerId: number) {
    const buf = Protobuf.encoder.encodeAssignId({ playerId });
    // console.log(buf);
    this.send(aconcat(new Uint8Array([PackageType.ASSIGN_ID]), buf));
  }
  Build(
    playerId: number,
    uid: string,
    buildingType: number,
    axialCoords: string
  ) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.BUILD]),
        Protobuf.encoder.encodeBuild({
          playerId,
          uid,
          buildingType,
          axialCoords
        })
      )
    );
  }
  Customize(Customization: { race: number; map: number }) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.CUSTOMIZE]),
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
        new Uint8Array([PackageType.ENTITY_MOVE]),
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
        new Uint8Array([PackageType.MESSAGE]),
        Protobuf.encoder.encodeMessage({ content })
      )
    );
  }
  MoveUnit(uid: string, targetX: number, targetY: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.MOVE_UNIT]),
        Protobuf.encoder.encodeMoveUnit({ uid, targetX, targetY })
      )
    );
  }
  StartGame() {
    this.send(PackageType.START_GAME + Protobuf.encoder.encodeStartGame());
  }
  SetAnimation(uid: string, animType: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.SET_ANIMATION]),
        Protobuf.encoder.encodeSetAnimation({ uid, animType })
      )
    );
  }
  TryAttack(sourceUid: string, targetUid: string) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_ATTACK]),
        Protobuf.encoder.encodeTryAttack({ sourceUid, targetUid })
      )
    );
  }
  TryBuild(axialCoords: string, buildingType: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_BUILD]),
        Protobuf.encoder.encodeTryBuild({ axialCoords, buildingType })
      )
    );
  }
  TryCustomize(Customization: { race: number; map: number }) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_CUSTOMIZE]),
        Protobuf.encoder.encodeTryCustomize(Customization)
      )
    );
  }
  TryDefend(sourceUid: string, targetX: number, targetY: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_DEFEND]),
        Protobuf.encoder.encodeTryDefend(sourceUid, targetX, targetY)
      )
    );
  }
  TryJoinLobby(username: string) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_JOIN_LOBBY]),
        Protobuf.encoder.encodeTryJoinLobby({ username })
      )
    );
  }
  TrySetPolicy(policyId: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_SET_POLICY]),
        Protobuf.encoder.encodeTrySetPolicy({ policyId })
      )
    );
  }
  TryStartGame() {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_START_GAME]),
        Protobuf.encoder.encodeTryStartGame()
      )
    );
  }
  UpdateHealth(uid: string, hp: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.UPDATE_HEALTH]),
        Protobuf.encoder.encodeUpdateHealth({ uid, hp })
      )
    );
  }
  UpdateLobby(playerId: number, username: string) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.UPDATE_LOBBY]),
        Protobuf.encoder.encodeUpdateLobby({ playerId, username })
      )
    );
  }
}

export default Protocol;

export { PackageType, Protocol };
