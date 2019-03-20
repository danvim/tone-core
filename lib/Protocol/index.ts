import * as protobuf from "protobufjs";

const decoder: { [s: string]: (buffer: Uint8Array) => object } = {};
const encoder: { [s: string]: (data: object) => Uint8Array } = {};

async function init() {
  console.log("init protobuf");
  await Promise.all([loadProto("Message")]);
}

async function loadProto(name: string) {
  const root = await protobuf.load(`./proto/${name}.proto`);
  const Message = root.lookupType(name);
  encoder["encode" + name] = (object: object) =>
    Message.encode(Message.create(object)).finish();
  decoder["decode" + name] = (buffer: Uint8Array) => Message.decode(buffer);
}

init();

export default { init, ...decoder, ...encoder };
