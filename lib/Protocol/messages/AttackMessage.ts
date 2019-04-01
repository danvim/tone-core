import {Field, Message, Type} from 'protobufjs';

@Type.d('AttackMessage')
export default class AttackMessage extends Message<AttackMessage> {
  @Field.d(1, 'string') public sourceUid!: string;
  @Field.d(2, 'string') public targetUid!: string;
}
