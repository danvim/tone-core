export declare class StubDataChannel implements RTCDataChannel {
    binaryType: string;
    bufferedAmount: number;
    bufferedAmountLowThreshold: number;
    id: number | null;
    label: string;
    maxPacketLifeTime: number | null;
    maxRetransmits: number | null;
    negotiated: boolean;
    onbufferedamountlow: ((this: RTCDataChannel, ev: Event) => any) | null;
    onclose: ((this: RTCDataChannel, ev: Event) => any) | null;
    onerror: ((this: RTCDataChannel, ev: RTCErrorEvent) => any) | null;
    onmessage: ((this: RTCDataChannel, ev: MessageEvent) => any) | null;
    onopen: ((this: RTCDataChannel, ev: Event) => any) | null;
    ordered: boolean;
    priority: RTCPriorityType;
    protocol: string;
    readyState: RTCDataChannelState;
    close(): void;
    send(data: any): void;
    addEventListener(type: any, listener: any, options?: any): void;
    removeEventListener(type: any, listener: any, options?: any): void;
    dispatchEvent(event: Event): boolean;
}
