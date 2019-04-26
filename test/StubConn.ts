import Conn = PeerJs.DataConnection;
import { StubDataChannel } from './StubDataChannel';
import uuid = require('uuid/v4');

export class StubConn implements Conn {
  public dataChannel: RTCDataChannel = new StubDataChannel();
  public label: string = uuid();
  public metadata: any;
  public open: boolean = true;
  public peerConnection: any;
  public peer: string = uuid();
  public reliable: boolean = true;
  public serialization: string = 'none';
  public type: string = 'none';
  public buffSize: number = 1000;

  public get partner() {
    return this.peerConnection;
  }

  public set partner(p) {
    this.peerConnection = p;
  }

  public onSend: ((data: any) => any) | undefined;
  public onClose: (() => any) | undefined;
  public onOpen: (() => any) | undefined;
  public onData: Array<(data: any) => any> = [];

  public connect(p: StubConn) {
    this.partner = p;
    p.partner = this;
    if (this.onOpen) {
      this.onOpen();
    }
    if (p.onOpen) {
      p.onOpen();
    }
  }

  public disconnect() {
    if (this.onClose) {
      this.onClose();
    }
    if (this.partner) {
      if (this.partner.onClose) {
        this.partner.onClose();
      }
      this.partner.partner = undefined;
    }
    this.partner = undefined;
  }

  public send(data: any): void {
    if (this.onSend) {
      this.onSend(data);
    }
    if (this.partner) {
      this.partner.onData.forEach((cb: (data: any) => any) => cb(data));
    }
  }
  public close(): void {
    if (this.onClose) {
      this.onClose();
    }
  }
  public on(event: string | 'open' | 'close', cb: () => void): void;
  public on(event: 'data', cb: (data: any) => void): void;
  public on(event: 'error', cb: (err: any) => void): void;
  public on(event: any, cb: any) {
    if (event === 'data') {
      this.onData.push(cb);
    } else if (event === 'close') {
      this.onClose = cb;
    } else if (event === 'open') {
      if (this.partner) {
        cb();
      } else {
        this.onOpen = cb;
      }
    }
  }
  public off(event: string, fn: any, once?: boolean | undefined): void {
    if (event === 'data') {
      this.onData = this.onData.filter((cb) => cb !== fn);
    } else if (event == 'close') {
      this.onClose = undefined;
    }
  }
}
