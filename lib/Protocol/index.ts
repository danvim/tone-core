import { PackageTypes } from "./PackageTypes";
import Conn = PeerJs.DataConnection;
// import Peer from Peer.
const Protobuf = require("./Protobuf");

type ProtocolCallback = (data: object) => any;

export class Protocol {
  conn: Conn;
  listeners: { [type: number]: ProtocolCallback };
  constructor(conn: Conn) {
    this.conn = conn;
    this.listeners = [];
  }
  async init() {
    // await Protobuf.awaitInitDone();
  }
  on(event: number, callback: ProtocolCallback) {
    this.listeners[event] = callback;
  }
  TryJoinLobby(username: string) {
    this.conn.send(
      PackageTypes.TryJoinLobby + Protobuf.encodeTryJoinLobby({ username })
    );
  }
  TryCustomize(Customization: object) {
    this.conn.send(
      PackageTypes.TryCustomize + Protobuf.encodeTryCustomize(Customization)
    );
  }
  TryStartGame() {
    this.conn.send(PackageTypes.TryStartGame + Protobuf.encodeTryStartGame());
  }
}
