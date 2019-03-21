declare function init(): Promise<void>;
declare const _default: {
    awaitInitDone: () => Promise<void>;
    getInitState: () => Promise<number>;
    init: typeof init;
};
export default _default;
