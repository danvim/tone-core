// const peerjs = require("peerjs-nodejs");
import {PackageType, Protocol} from '../../lib/Protocol';

describe('Protocol', () => {
  it('Protocol', () => {
    const protocol = new Protocol();
    expect(1).toBe(1);
  });

  it('Protocol.encode', () => {
    const buf = Protocol.encode(PackageType.TRY_JOIN_LOBBY, { username: 'hi' });
    global.console.log(buf);
    expect(buf).toBeTruthy();
  });

  it('Protocol.encode', () => {
    const buf = Protocol.encode(PackageType.START_GAME, {});
    global.console.log(buf);
    expect(buf).toBeTruthy();
  });
});
