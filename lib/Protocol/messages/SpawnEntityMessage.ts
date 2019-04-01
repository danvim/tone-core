import { Field, Message, Type } from 'protobufjs';
import CartesianMessage from './submessages/CartesianMessage';
import { EntityType } from '../../Game/Entity';

@Type.d('SpawnEntityMessage')
export default class SpawnEntityMessage extends Message<SpawnEntityMessage> {
  @Field.d(1, 'string') public uid!: string;
  @Field.d(2, CartesianMessage) public position!: CartesianMessage;
  @Field.d(3, EntityType) public entityType!: EntityType;
  @Field.d(4, 'int32') public playerId!: number;
}
