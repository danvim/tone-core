import { Field, Message, Type } from 'protobufjs';
import { FightingStyle } from '../../Game';

@Type.d('UpdateFightingStyle')
export default class UpdateFightingStyle extends Message<UpdateFightingStyle> {
  @Field.d(1, 'string') public barrackUid!: string;
  @Field.d(2, FightingStyle) public fightingStyle!: FightingStyle;
  @Field.d(3, 'string') public targetUid?: string;
}
