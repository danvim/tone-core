import { Message, Reader, Writer } from 'protobufjs';
import * as messages from './messages';
import { UPPER_SNAKE2UpperCamel } from '../helper';

export enum PackageType {
  ATTACK,
  BUILD,
  CUSTOMIZE,
  CHAT,
  MOVE_ENTITY,
  SET_ANIMATION,
  SPAWN_ENTITY,
  START_GAME,
  TRY_ATTACK,
  TRY_BUILD,
  TRY_CUSTOMIZE,
  TRY_DEFEND,
  TRY_JOIN_LOBBY,
  TRY_SET_JOB,
  TRY_SET_POLICY,
  TRY_START_GAME,
  UPDATE_HEALTH,
  UPDATE_JOB,
  UPDATE_LOBBY,
  UPDATE_TILES,
  TRY_SET_FIGHTING_STYLE,
  UPDATE_FIGHTING_STYLE,
  UPDATE_RESOURCE_STORAGE,
}

interface MessageConstructor {
  new (...args: any[]): Message;
  create(object: any): Message;
  encode(object: any): Writer;
  decode(reder: Reader | Uint8Array): any;
}

export function getPackageClass(packageType: PackageType): MessageConstructor {
  const className: string =
    UPPER_SNAKE2UpperCamel(PackageType[packageType]) + 'Message';
  return (messages as { [k in string]: MessageConstructor })[className];
}
