import { StubConn } from '..';

describe('stub conn', () => {
  const conn1 = new StubConn();
  const conn2 = new StubConn();
  conn1.connect(conn2);
  it('connected', () => {
    expect(conn1.partner).toBe(conn2);
    expect(conn2.partner).toBe(conn1);
  });
  it('connected using peerConnection', () => {
    expect(conn1.peerConnection).toBe(conn2);
    expect(conn2.peerConnection).toBe(conn1);
  });
  it('send and recieve', async (done) => {
    conn2.on('data', (data) => {
      expect(data).toBe('hello world');
      done();
    });
    conn1.send('hello world');
  });
  it('disconnect', () => {
    const onClose1 = jest.fn();
    const onClose2 = jest.fn();
    conn1.on('close', onClose1);
    conn2.on('close', onClose2);
    conn1.disconnect();
    expect(onClose1).toBeCalled();
    expect(onClose2).toBeCalled();
  });
});
