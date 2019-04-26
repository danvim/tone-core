"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StubDataChannel = /** @class */ (function () {
    function StubDataChannel() {
        this.binaryType = '';
        this.bufferedAmount = 0;
        this.bufferedAmountLowThreshold = 0;
        this.id = 0;
        this.label = '';
        this.maxPacketLifeTime = 0;
        this.maxRetransmits = 0;
        this.negotiated = false;
        this.onbufferedamountlow = null;
        this.onclose = null;
        this.onerror = null;
        this.onmessage = null;
        this.onopen = null;
        this.ordered = false;
        this.priority = 'low';
        this.protocol = '';
        this.readyState = 'open';
    }
    StubDataChannel.prototype.close = function () {
        throw new Error('Method not implemented.');
    };
    StubDataChannel.prototype.send = function (data) {
        throw new Error('Method not implemented.');
    };
    StubDataChannel.prototype.addEventListener = function (type, listener, options) {
        throw new Error('Method not implemented.');
    };
    StubDataChannel.prototype.removeEventListener = function (type, listener, options) {
        throw new Error('Method not implemented.');
    };
    StubDataChannel.prototype.dispatchEvent = function (event) {
        throw new Error('Method not implemented.');
    };
    return StubDataChannel;
}());
exports.StubDataChannel = StubDataChannel;
