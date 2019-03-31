global.Blob = require("blob-polyfill").Blob;
var express = require("express");
var app = express();
var http = require("http").Server(app);
// var ioServer = require("socket.io")(http);
const peerjs = require("peerjs-nodejs");

const { ExpressPeerServer } = require("peer");

const Protocol = require("../dist/Protocol/").default;
const ProtoBuf = require("../dist/Protocol/Protobuf").default;
const PackageTypes = require("../dist/Protocol/PackageTypes").PackageTypes;

const Game = require("../dist/Game").default;
console.log(Game);
// @ts-ignore
global.postMessage = (...arg) => console.log(arg);

const PORT = 3300;

app.use("/peer", ExpressPeerServer(http, { debug: false }));

http.listen(PORT, () => {
  console.log("listening on localhost:" + PORT);
});

let peer = peerjs("server", {
  host: "localhost",
  port: PORT,
  path: "/peer"
});
peer.serialization = "none";

const serverProcotocol = new Protocol();
const clientProcotocol = new Protocol();

peer.on("connection", conn => {
  console.log("connected", conn.label);
  conn.serialization = "none";
  serverProcotocol.add(conn);
  serverProcotocol.on(PackageTypes.AssignId, buf => {
    console.log("beyyyy", buf);
  });
  serverProcotocol.on(PackageTypes.Message, buf => {
    console.log("message", buf);
  });
  // conn.on("data", data => {
  //   console.log("conn1", data);
  //   conn.send(data);
  // });
  conn.send("hello world");
});

peer.on("open", () => {
  let peer2 = peerjs({ host: "localhost", port: PORT, path: "/peer" });
  peer2.serialization = "none";
  let conn2 = peer2.connect("server");
  conn2.serialization = "none";
  conn2.on("data", data => {
    console.log("conn2", data);
  });
  conn2.on("open", () => {
    console.log("send");
    clientProcotocol.add(conn2);
    clientProcotocol.AssignId(2);
    clientProcotocol.Message("hello");
    clientProcotocol.emit(PackageTypes.Message, { content: "world" });
  });
});
