export class StubDataChannel implements RTCDataChannel {
  public binaryType: string = '';
  public bufferedAmount: number = 0;
  public bufferedAmountLowThreshold: number = 0;
  public id: number | null = 0;
  public label: string = '';
  public maxPacketLifeTime: number | null = 0;
  public maxRetransmits: number | null = 0;
  public negotiated: boolean = false;
  public onbufferedamountlow:
    | ((this: RTCDataChannel, ev: Event) => any)
    | null = null;
  public onclose: ((this: RTCDataChannel, ev: Event) => any) | null = null;
  public onerror:
    | ((this: RTCDataChannel, ev: RTCErrorEvent) => any)
    | null = null;
  public onmessage:
    | ((this: RTCDataChannel, ev: MessageEvent) => any)
    | null = null;
  public onopen: ((this: RTCDataChannel, ev: Event) => any) | null = null;
  public ordered: boolean = false;
  public priority: RTCPriorityType = 'low';
  public protocol: string = '';
  public readyState: RTCDataChannelState = 'open';
  public close() {
    throw new Error('Method not implemented.');
  }
  public send(data: any) {
    throw new Error('Method not implemented.');
  }

  public addEventListener(type: any, listener: any, options?: any) {
    throw new Error('Method not implemented.');
  }

  public removeEventListener(type: any, listener: any, options?: any) {
    throw new Error('Method not implemented.');
  }
  public dispatchEvent(event: Event): boolean {
    throw new Error('Method not implemented.');
  }
}
