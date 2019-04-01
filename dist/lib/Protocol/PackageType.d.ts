import { Message, Reader, Writer } from 'protobufjs';
export declare enum PackageType {
    ATTACK = 0,
    BUILD = 1,
    CUSTOMIZE = 2,
    CHAT = 3,
    MOVE_ENTITY = 4,
    SET_ANIMATION = 5,
    SPAWN_ENTITY = 6,
    START_GAME = 7,
    TRY_ATTACK = 8,
    TRY_BUILD = 9,
    TRY_CUSTOMIZE = 10,
    TRY_DEFEND = 11,
    TRY_JOIN_LOBBY = 12,
    TRY_SET_POLICY = 13,
    TRY_START_GAME = 14,
    UPDATE_HEALTH = 15,
    UPDATE_LOBBY = 16,
    UPDATE_TILES = 17
}
interface MessageConstructor {
    new (...args: any[]): Message;
    create(object: any): Message;
    encode(object: any): Writer;
    decode(reder: Reader | Uint8Array): any;
}
export declare function getPackageClass(packageType: PackageType): MessageConstructor;
export {};
