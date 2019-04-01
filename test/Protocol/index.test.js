// const peerjs = require("peerjs-nodejs");
const { Protocol, PackageType } = require('../../lib/Protocol');

test('Protocol', () => {
  const protocol = new Protocol();
  expect(1).toBe(1);
});

test('Protocl.encode', () => {
  const buf = Protocol.encode(PackageType.TRY_JOIN_LOBBY, { username: 'hi' });
  console.log(buf);
  expect(buf).toBeTruthy();
});

test('Protocl.encode', () => {
  const buf = Protocol.encode(PackageType.START_GAME, {});
  console.log(buf);
  expect(buf).toBeTruthy();
});
