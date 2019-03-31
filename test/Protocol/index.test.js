// const peerjs = require("peerjs-nodejs");
const Protobuf = require("../../lib/Protocol/Protobuf").default;
const Protocol = require("../../lib/Protocol").Protocol;

test("protobuf", async done => {
  await Protobuf.awaitInitDone();
  const {
    encoder: { encodeMessage },
    decoder: { decodeMessage }
  } = Protobuf;
  const data = encodeMessage({ content: "Message" });
  expect(decodeMessage(data).content).toBe("Message");
  done();
});

test("protobuf-tiles", async done => {
  await Protobuf.awaitInitDone();
  const {
    encoder: { encodeUpdateTiles },
    decoder: { decodeUpdateTiles }
  } = Protobuf;
  const object = {
    tiles: {
      "1,2": { height: 12, type: 4 },
      "100,99": { height: 5, type: 7 }
    }
  };
  const data = encodeUpdateTiles(object);
  expect(decodeUpdateTiles(data)).toEqual(object);
  done();
});

test("Protocol", () => {
  const protocol = new Protocol();
  expect(1).toBe(1);
});
