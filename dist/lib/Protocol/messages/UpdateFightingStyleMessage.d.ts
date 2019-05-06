import { Message } from 'protobufjs';
import { FightingStyle } from '../../Game';
export default class UpdateFightingStyle extends Message<UpdateFightingStyle> {
    barrackUid: string;
    fightingStyle: FightingStyle;
    targetUid?: string;
}
