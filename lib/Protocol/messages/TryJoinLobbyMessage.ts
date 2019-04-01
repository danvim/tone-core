import {Field, Message, Type} from 'protobufjs';

@Type.d('TryJoinLobbyMessage')
export default class TryJoinLobbyMessage extends Message<TryJoinLobbyMessage> {
  @Field.d(1, 'string') public username!: string;
}
