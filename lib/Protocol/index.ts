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
    conn.on("data", (data: ArrayBuffer) => {
      const type = data.slice(0, 1);
      this.listeners[Number(type)](data.slice(1));
    });
    this.listeners = [];
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
