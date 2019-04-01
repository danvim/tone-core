import {Field, Message, Type} from 'protobufjs';

@Type.d('UpdateLobbyMessage')
export default class UpdateLobbyMessage extends Message<UpdateLobbyMessage> {
  @Field.d(1, 'int32') public playerId!: number;
  @Field.d(2, 'string') public username!: string;
  @Field.d(3, 'string') public connId!: string;
}
