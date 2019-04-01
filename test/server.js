global.Blob = require("blob-polyfill").Blob;
let express = require("express");
let app = express();
let http = require("http").Server(app);
// let ioServer = require("socket.io")(http);
const peerjs = require("peerjs-nodejs");

const { ExpressPeerServer } = require("peer");

const {Protocol, PackageType} = require("../dist/lib/Protocol/");

const Game = require("../dist/lib/Game");
const ToneCore = require("../dist/lib");
global.postMessage = (...arg) => global.console.log(arg);

const PORT = 3300;

app.use("/peer", ExpressPeerServer(http, { debug: false }));

http.listen(PORT, () => {
  global.console.log("listening on localhost:" + PORT);
});

let peer = peerjs("server", {
  host: "localhost",
  port: PORT,
  path: "/peer",
});
peer.serialization = "none";

const serverProtocol = new Protocol();
const clientProtocol = new Protocol();

peer.on("connection", conn => {
  global.console.log("connected", conn.label);
  conn.serialization = "none";
  serverProtocol.add(conn);
  serverProtocol.on(PackageType.CHAT, buf => {
    global.console.log("message", buf);
  });
  conn.send("hello world");
});

peer.on("open", () => {
  let peer2 = peerjs({ host: "localhost", port: PORT, path: "/peer" });
  peer2.serialization = "none";
  let conn2 = peer2.connect("server");
  conn2.serialization = "none";
  conn2.on("data", data => {
    global.console.log("conn2", data);
  });
  conn2.on("open", () => {
    global.console.log("send");
    clientProtocol.add(conn2);
    clientProtocol.emit(PackageType.CHAT, { content: "world" });
  });
});
