import {Field, Message, Type} from 'protobufjs';

@Type.d('TryAttackMessage')
export default class TryAttackMessage extends Message<TryAttackMessage> {
  @Field.d(1, 'string') public sourceUid!: string;
  @Field.d(2, 'string') public targetUid!: string;
}
