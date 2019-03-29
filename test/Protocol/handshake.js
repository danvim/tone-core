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

const clientPeerDo = clientPeer => cb => {
  const conn = clientPeer.connect("server");
  conn.serialization = "none";
  conn.on("open", () => {
    console.log("cb");
    cb(conn);
  });
};

const serverDo = cb => {};

module.exports = (serverPeer, clientPeer) => {
  const clientDo = clientPeerDo(clientPeer);
  serverPeer.on("connection", conn => {
    conn.serialization = "none";
    serverConnectCallbacks.forEach((f, k) => f(k, conn));
    conn.on("data", data => {
      console.log(data);
      serverCallbacks.forEach((f, k) => f(k, data));
    });
  });
  it("basic", done => {
    pushServer(data => {
      expect(data).toBe("hello");
      done();
    });
    clientDo(conn => {
      conn.send("hello");
    });
  });
  // it("encoder", done => {
  //   pushServer(data => {
  //     expect(decodeMessage(data)).toBe("Message");
  //     done();
  //   });
  //   clientDo(conn => {
  //     conn.send(encodeMessage("Message"));
  //   });
  // });
  // let serverProtocol;
  // it("protocol on TryJoinLobby", done => {
  //   pushServerConnect((k, conn) => {
  //     serverProtocol = new Protocol();
  //     serverProtocol.add(conn);
  //     serverProtocol.on(PackageTypes.TryJoinLobby, obj => {
  //       console.log(obj);
  //       expect(obj.username).toBe("Dipsy");
  //       done();
  //     });
  //   });
  //   clientDo(conn => {
  //     let clientProtocol = new Protocol();
  //     clientProtocol.add(conn);
  //     clientProtocol.TryJoinLobby("Dipsy");
  //     clientProtocol.TryStartGame();
  //   });
  // });
};
