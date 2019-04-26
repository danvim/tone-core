// const peerjs = require("peerjs-nodejs");
import { PackageType, Protocol } from '../../lib/Protocol';
import { StubConn } from '../StubConn';

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

  it('tests with StubConn', async (done) => {
    const protocol1 = new Protocol();
    const protocol2 = new Protocol();
    const conn1 = new StubConn();
    const conn2 = new StubConn();
    conn1.connect(conn2);
    protocol1.add(conn1);
    protocol2.add(conn2);
    protocol1.on(PackageType.CHAT, (data) => {
      expect(Object(data).content).toBe('hello world');
      done();
    });
    protocol2.emit(PackageType.CHAT, { content: 'hello world' });
  });
});
