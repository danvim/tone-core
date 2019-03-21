var express = require("express");
var app = express();
var http = require("http").Server(app);
var ioServer = require("socket.io")(http);

// @ts-ignore
global.Blob = require("blob-polyfill").Blob;
// global.FileReader = require("./filereader");
// @ts-ignore
global.File = false;

const peerjs = require("peerjs-nodejs");
const { ExpressPeerServer } = require("peer");

// @ts-ignore
global.postMessage = (...arg) => console.log(arg);

const PORT = 3300;

const main = async () => {
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
  const pb = require("../../lib/Protocol/Protobuf").default;
  // test("init protobuf", async () => {
  //   await pb.awaitInitDone();
  //   expect(pb.initState).toBe(2);
  // });
  // await pb.awaitInitDone();
  require("./handshake")(serverPeer, clientPeer);
  try {
    await http.listen(PORT);
  } catch (e) {
    console.log(e);
  }
  console.log("listening on " + PORT);
};

main();
