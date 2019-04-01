import { EntityInterface } from './Entity';
import { FightingStyle } from './FightingStyle';
export interface UnitInterface extends EntityInterface {
  fightingStyle: FightingStyle;
}
