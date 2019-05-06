import { Message } from 'protobufjs';
import { FightingStyle } from '../../Game';
export default class UpdateFightingStyle extends Message<UpdateFightingStyle> {
    barrackId: string;
    fightingStyle: FightingStyle;
    targetId?: string;
}
