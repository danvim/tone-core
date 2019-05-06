import { Field, Message, Type } from 'protobufjs';
import { FightingStyle } from '../../Game';

@Type.d('TrySetFightingStyle')
export default class TrySetFightingStyle extends Message<TrySetFightingStyle> {
  @Field.d(1, 'string') public barrackUid!: string;
  @Field.d(2, FightingStyle) public fightingStyle!: FightingStyle;
  @Field.d(3, 'string') public targetUid?: string;
}
