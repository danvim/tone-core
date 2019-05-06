// const peerjs = require("peerjs-nodejs");
import { PackageType, Protocol } from '../../lib/Protocol';
import { StubConn } from '../StubConn';
import { FightingStyle, JobPriority, JobNature, ResourceType } from '../../lib';
let protocol1: Protocol;
let protocol2: Protocol;
let conn1: StubConn;
let conn2: StubConn;
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
    protocol1 = new Protocol();
    protocol2 = new Protocol();
    conn1 = new StubConn();
    conn2 = new StubConn();
    conn1.connect(conn2);
    protocol1.add(conn1);
    protocol2.add(conn2);
    protocol1.on(PackageType.CHAT, (data) => {
      expect(Object(data).content).toBe('hello world');
      done();
    });
    protocol2.emit(PackageType.CHAT, { content: 'hello world' });
  });

  it('try set fighting style', async (done) => {
    const obj = {
      barrackUid: 'some uuid',
      fightingStyle: FightingStyle.AGGRESSIVE,
      targetUid: '',
    };
    protocol2.on(PackageType.TRY_SET_FIGHTING_STYLE, (data) => {
      expect(Object(data).barrackUid).toBe(obj.barrackUid);
      done();
    });
    protocol1.emit(PackageType.TRY_SET_FIGHTING_STYLE, obj);
  });

  it(' fighting style', async (done) => {
    const obj = {
      barrackUid: 'some uuid',
      fightingStyle: FightingStyle.AGGRESSIVE,
      targetUid: '',
    };
    protocol2.on(PackageType.UPDATE_FIGHTING_STYLE, (data) => {
      expect(Object(data).barrackUid).toBe(obj.barrackUid);
      done();
    });
    protocol1.emit(PackageType.UPDATE_FIGHTING_STYLE, obj);
  });

  it('update job', async (done) => {
    const obj = {
      jobId: 'jid',
      buildingId: 'bid',
      workerIds: ['pid'],
      priority: JobPriority.HIGH,
      nature: JobNature.CONSTRUCTION,
      resourceType: ResourceType.STRUCT,
    };
    protocol2.on(PackageType.UPDATE_JOB, (data) => {
      expect(Object(data).resourceType).toBe(obj.resourceType);
      console.log(data);
      done();
    });
    protocol1.emit(PackageType.UPDATE_JOB, obj);
  });
});
