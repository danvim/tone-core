import { PackageType } from './PackageType';
import Conn = PeerJs.DataConnection;
// tslint:disable-next-line:no-var-requires
const aconcat = require('arraybuffer-concat');
// import Peer from Peer.
// tslint:disable-next-line:no-var-requires
const Protobuf = require('./Protobuf').default;
import { UPPER_SNAKE2UpperCamel } from '../helper';

type ProtocolCallback = (data: any, conn: Conn) => any;

class Protocol {
  public static PackageType = PackageType;
  public static encode(event: PackageType, object: object) {
    const buf = Protobuf.encoder[
      'encode' + UPPER_SNAKE2UpperCamel(PackageType[event])
    ](object);
    return aconcat(new Uint8Array([event]), buf);
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
  public decode(data: Uint8Array) {
    const event = new Uint8Array(data.slice(0, 1))[0];
    const buf = new Uint8Array(data.slice(1));
    const decoded = Protobuf.decoder[
      'decode' + UPPER_SNAKE2UpperCamel(PackageType[event])
    ](buf);
    return decoded;
  }
  public Build(
    playerId: number,
    uid: string,
    buildingType: number,
    axialCoords: string,
  ) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.BUILD]),
        Protobuf.encoder.encodeBuild({
          playerId,
          uid,
          buildingType,
          axialCoords,
        }),
      ),
    );
  }
  public Customize(Customization: { race: number; map: number }) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.CUSTOMIZE]),
        Protobuf.encoder.encodeCustomize(Customization),
      ),
    );
  }
  public MoveEntity(
    uid: string,
    x: number,
    y: number,
    z: number,
    yaw: number,
    pitch: number,
    vx: number,
    vy: number,
    vz: number,
  ) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.MOVE_ENTITY]),
        Protobuf.encoder.encodeMoveEntity({
          uid,
          x,
          y,
          z,
          yaw,
          pitch,
          vx,
          vy,
          vz,
        }),
      ),
    );
  }
  public Message(content: string) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.MESSAGE]),
        Protobuf.encoder.encodeMessage({ content }),
      ),
    );
  }
  public StartGame() {
    this.send(PackageType.START_GAME + Protobuf.encoder.encodeStartGame());
  }
  public SetAnimation(uid: string, animType: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.SET_ANIMATION]),
        Protobuf.encoder.encodeSetAnimation({ uid, animType }),
      ),
    );
  }
  public TryAttack(sourceUid: string, targetUid: string) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_ATTACK]),
        Protobuf.encoder.encodeTryAttack({ sourceUid, targetUid }),
      ),
    );
  }
  public TryBuild(axialCoords: string, buildingType: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_BUILD]),
        Protobuf.encoder.encodeTryBuild({ axialCoords, buildingType }),
      ),
    );
  }
  public TryCustomize(Customization: { race: number; map: number }) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_CUSTOMIZE]),
        Protobuf.encoder.encodeTryCustomize(Customization),
      ),
    );
  }
  public TryDefend(sourceUid: string, targetX: number, targetY: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_DEFEND]),
        Protobuf.encoder.encodeTryDefend(sourceUid, targetX, targetY),
      ),
    );
  }
  public TryJoinLobby(username: string) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_JOIN_LOBBY]),
        Protobuf.encoder.encodeTryJoinLobby({ username }),
      ),
    );
  }
  public TrySetPolicy(policyId: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_SET_POLICY]),
        Protobuf.encoder.encodeTrySetPolicy({ policyId }),
      ),
    );
  }
  public TryStartGame() {
    this.send(
      aconcat(
        new Uint8Array([PackageType.TRY_START_GAME]),
        Protobuf.encoder.encodeTryStartGame(),
      ),
    );
  }
  public UpdateHealth(uid: string, hp: number) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.UPDATE_HEALTH]),
        Protobuf.encoder.encodeUpdateHealth({ uid, hp }),
      ),
    );
  }
  public UpdateLobby(playerId: number, username: string) {
    this.send(
      aconcat(
        new Uint8Array([PackageType.UPDATE_LOBBY]),
        Protobuf.encoder.encodeUpdateLobby({ playerId, username }),
      ),
    );
  }
}

export { PackageType, Protocol };
