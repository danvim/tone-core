import {Field, Message, Type} from 'protobufjs';
import Cartesian3Message from './submessages/Cartesian3Message';
import {EntityType} from '../../Game';

@Type.d('SpawnEntityMessage')
export default class SpawnEntityMessage extends Message<SpawnEntityMessage> {
  @Field.d(1, 'string') public uid!: string;
  @Field.d(2, Cartesian3Message) public position!: Cartesian3Message;
  @Field.d(3, EntityType) public entityType!: EntityType;
  @Field.d(4, 'int32') public playerId!: number;
}
