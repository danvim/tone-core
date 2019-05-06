import { Message } from 'protobufjs';
import { FightingStyle } from '../../Game';
export default class TrySetFightingStyle extends Message<TrySetFightingStyle> {
    barrackId: string;
    fightingStyle: FightingStyle;
    targetId?: string;
}
