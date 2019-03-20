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
  // test("hi", () => {
  require("./handshake")(serverPeer, clientPeer);
  // expect(1).toMatch(1);
  // });
  await http.listen(PORT);
  console.log("listening on " + PORT);
  await new Promise(
    res =>
      setTimeout(() => {
        console.log("timeout");
        res();
      }),
    1000
  );
};

main();
