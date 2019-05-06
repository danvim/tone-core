"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// const peerjs = require("peerjs-nodejs");
var Protocol_1 = require("../../lib/Protocol");
var StubConn_1 = require("../StubConn");
var lib_1 = require("../../lib");
var protocol1;
var protocol2;
var conn1;
var conn2;
describe('Protocol', function () {
    it('Protocol', function () {
        var protocol = new Protocol_1.Protocol();
        expect(1).toBe(1);
    });
    it('Protocol.encode', function () {
        var buf = Protocol_1.Protocol.encode(Protocol_1.PackageType.TRY_JOIN_LOBBY, { username: 'hi' });
        global.console.log(buf);
        expect(buf).toBeTruthy();
    });
    it('Protocol.encode', function () {
        var buf = Protocol_1.Protocol.encode(Protocol_1.PackageType.START_GAME, {});
        global.console.log(buf);
        expect(buf).toBeTruthy();
    });
    it('tests with StubConn', function (done) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            protocol1 = new Protocol_1.Protocol();
            protocol2 = new Protocol_1.Protocol();
            conn1 = new StubConn_1.StubConn();
            conn2 = new StubConn_1.StubConn();
            conn1.connect(conn2);
            protocol1.add(conn1);
            protocol2.add(conn2);
            protocol1.on(Protocol_1.PackageType.CHAT, function (data) {
                expect(Object(data).content).toBe('hello world');
                done();
            });
            protocol2.emit(Protocol_1.PackageType.CHAT, { content: 'hello world' });
            return [2 /*return*/];
        });
    }); });
    it('try set fighting style', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var obj;
        return __generator(this, function (_a) {
            obj = {
                barrackUid: 'some uuid',
                fightingStyle: lib_1.FightingStyle.AGGRESSIVE,
                targetUid: '',
            };
            protocol2.on(Protocol_1.PackageType.TRY_SET_FIGHTING_STYLE, function (data) {
                expect(Object(data).barrackUid).toBe(obj.barrackUid);
                done();
            });
            protocol1.emit(Protocol_1.PackageType.TRY_SET_FIGHTING_STYLE, obj);
            return [2 /*return*/];
        });
    }); });
    it(' fighting style', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var obj;
        return __generator(this, function (_a) {
            obj = {
                barrackUid: 'some uuid',
                fightingStyle: lib_1.FightingStyle.AGGRESSIVE,
                targetUid: '',
            };
            protocol2.on(Protocol_1.PackageType.UPDATE_FIGHTING_STYLE, function (data) {
                expect(Object(data).barrackUid).toBe(obj.barrackUid);
                done();
            });
            protocol1.emit(Protocol_1.PackageType.UPDATE_FIGHTING_STYLE, obj);
            return [2 /*return*/];
        });
    }); });
    it('update job', function (done) { return __awaiter(_this, void 0, void 0, function () {
        var obj;
        return __generator(this, function (_a) {
            obj = {
                jobId: 'jid',
                buildingId: 'bid',
                workerIds: ['pid'],
                priority: lib_1.JobPriority.HIGH,
                nature: lib_1.JobNature.CONSTRUCTION,
                resourceType: lib_1.ResourceType.STRUCT,
            };
            protocol2.on(Protocol_1.PackageType.UPDATE_JOB, function (data) {
                expect(Object(data).resourceType).toBe(obj.resourceType);
                console.log(data);
                done();
            });
            protocol1.emit(Protocol_1.PackageType.UPDATE_JOB, obj);
            return [2 /*return*/];
        });
    }); });
});
