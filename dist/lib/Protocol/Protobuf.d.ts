declare function init(): Promise<void>;
declare const _default: {
    init: typeof init;
    decoder: {
        [s: string]: (buffer: Uint8Array) => object;
    };
    encoder: {
        [s: string]: (data: object) => Uint8Array;
    };
    awaitInitDone: () => Promise<void>;
    getInitState: () => Promise<number>;
    initState: number;
};
export default _default;
