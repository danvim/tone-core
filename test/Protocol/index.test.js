var express = require("express");
var app = express();
var http = require("http").Server(app);
var ioServer = require("socket.io")(http);

global.Blob = require("blob-polyfill").Blob;
// global.FileReader = require("./filereader");
global.File = false;

const peerjs = require("peerjs-nodejs");
const { ExpressPeerServer } = require("peer");

global.postMessage = (...arg) => console.log(arg);

const PORT = 3300;

http.listen(PORT, () => {
  console.log("listening on " + PORT);
});

app.use("/peer", ExpressPeerServer(http, { debug: true }));

let serverPeer = peerjs("server", {
  host: "localhost",
  port: PORT,
  path: "/peer"
});

let clientPeer = peerjs("server", {
  host: "localhost",
  port: PORT,
  path: "/peer"
});
require("./handshake")(serverPeer, clientPeer);
