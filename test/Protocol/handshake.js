const serverCallbacks = [];
const clientCallbacks = [];

const { encodeMessage, decodeMessage } = require("../../lib/Protocol/Protobuf");

const pushServer = fn => {
  const id = serverCallbacks.length;
  serverCallbacks.push((k, data) => {
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
  it("handshake", () => {
    pushServer(data => {
      expect(data).toBe("hello");
    });
    pushClient(conn => {
      conn.send("hello");
    });
  });
  it("handshake", () => {
    pushServer(data => {
      expect(decodeMessage(data)).toBe("Message");
    });
    pushClient(conn => {
      conn.send(encodeMessage("Message"));
    });
  });
  serverPeer.on("connection", conn => {
    conn.serialization = "none";
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
