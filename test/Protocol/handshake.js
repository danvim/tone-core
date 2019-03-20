const serverCallbacks = [];
const clientCallbacks = [];

module.exports = (serverPeer, clientPeer) => {
  it("handshake", () => {
    serverPeer.on("connection", conn => {
      conn.serialization = "none";
      conn.on("data", data => {
        expect(data).toBe("hello");
      });
    });
    const conn = clientPeer.connect("server");
    conn.serialization = "none";
    conn.on("open", () => {
      conn.send("hello");
    });
  });
};
