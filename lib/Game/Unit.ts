import { EntityInterface } from './Entity';
import { FightingStyle } from './FightingStyle';
export interface Unit extends EntityInterface {
  fightingStyle: FightingStyle;
}
