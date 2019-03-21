const serverCallbacks = [];
const serverConnectCallbacks = [];
const clientCallbacks = [];

const { encodeMessage, decodeMessage } = require("../../lib/Protocol/Protobuf");
const { PackageTypes } = require("../../lib/Protocol/PackageTypes");
const { Protocol } = require("../../lib/Protocol");

const pushServer = fn => {
  const id = serverCallbacks.length;
  serverCallbacks.push((k, data) => {
    if (k == id) fn(data);
  });
  serverConnectCallbacks.push(() => {});
};

const pushServerConnect = fn => {
  const id = serverCallbacks.length;
  serverCallbacks.push(() => {});
  serverConnectCallbacks.push((k, data) => {
    if (k == id) fn(data);
  });
};

const pushClient = fn => {
  const id = clientCallbacks.length;
  clientCallbacks.push((k, conn) => {
    if (k == id) fn(conn);
  });
};

module.exports = (serverPeer, clientPeer) => {
  it("basic", () => {
    pushServer(data => {
      expect(data).toBe("hello");
    });
    pushClient(conn => {
      conn.send("hello");
    });
  });
  it("encoder", () => {
    pushServer(data => {
      expect(decodeMessage(data)).toBe("Message");
    });
    pushClient(conn => {
      conn.send(encodeMessage("Message"));
    });
  });
  let serverProtocol;
  it("protocol on TryJoinLobby", () => {
    pushServerConnect((k, conn) => {
      serverProtocol = new Protocol(conn);
      serverProtocol.on(PackageTypes.TryJoinLobby, obj => {
        expect(obj.username).toBe("Dipsy");
      });
    });
    pushClient((k, conn) => {
      let clientProtocol = new Protocol(conn);
      clientProtocol.TryJoinLobby("Dipsy");
      clientProtocol.TryStartGame();
    });
  });
  serverPeer.on("connection", conn => {
    conn.serialization = "none";
    serverConnectCallbacks.forEach((f, k) => f(k, conn));
    conn.on("data", data => {
      serverCallbacks.forEach((f, k) => f(k, data));
      setTimeout(() => conn.close(), 300);
    });
  });
  const conn = clientPeer.connect("server");
  conn.serialization = "none";
  conn.on("open", () => {
    clientCallbacks.forEach((f, k) => f(k, conn));
    conn.close();
  });
};
