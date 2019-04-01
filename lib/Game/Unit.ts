import { Entity } from './Entity';
import { FightingStyle } from './FightingStyle';
export interface Unit extends Entity {
  fightingStyle: FightingStyle;
}
