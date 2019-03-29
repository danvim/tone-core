import * as protobuf from "protobufjs";
import { readdirSync } from "fs";

let initState = 0;
let initDonePromise: Promise<any>;

const decoder: { [s: string]: (buffer: Uint8Array) => object } = {};
const encoder: { [s: string]: (data: object) => Uint8Array } = {};

async function init() {
  if (initState === 1) return await awaitInitDone();
  if (initState == 2) return;
  initState = 1;
  const items = readdirSync(__dirname + "/proto/");
  initDonePromise = Promise.all(
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
  await initDonePromise;
  initState = 2;
}

async function loadProto(name: string) {
  try {
    const root = await protobuf.load(`${__dirname}/proto/${name}.proto`);
    const Message = root.lookupType(name);
    encoder["encode" + name] = (object: object) =>
      Message.encode(Message.create(object)).finish();
    decoder["decode" + name] = (buffer: Uint8Array) => Message.decode(buffer);
  } catch (e) {
    console.log(name, e);
  }
}

init();

const awaitInitDone = async () => {
  if (initState === 0) await init();
  if (initState === 1) await initDonePromise;
};

const getInitState = async () => {
  return initState;
};

export default {
  init,
  ...decoder,
  ...encoder,
  awaitInitDone,
  getInitState,
  initState
};
