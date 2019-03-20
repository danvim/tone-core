import * as protobuf from "protobufjs";
import { readdirSync } from "fs";

const decoder: { [s: string]: (buffer: Uint8Array) => object } = {};
const encoder: { [s: string]: (data: object) => Uint8Array } = {};

async function init() {
  console.log("init protobuf");
  const items = readdirSync(__dirname + "/.proto/");
  console.log(items);
  await Promise.all(
    items
      .map(item => {
        const m = item.match(/(.+).proto$/);
        if (m && m[1]) {
          return m[1];
        } else {
          return null;
        }
      })
      .filter((l: string | null) => l !== null)
      // @ts-ignore
      .map(loadProto)
  );
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
