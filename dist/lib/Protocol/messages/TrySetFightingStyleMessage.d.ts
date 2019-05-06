import { Message } from 'protobufjs';
import { FightingStyle } from '../../Game';
export default class TrySetFightingStyle extends Message<TrySetFightingStyle> {
    barrackUid: string;
    fightingStyle: FightingStyle;
    targetUid?: string;
}
