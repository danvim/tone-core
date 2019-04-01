import {Field, Message, Type} from 'protobufjs';

@Type.d('ChatMessage')
export default class ChatMessage extends Message<ChatMessage> {
  @Field.d(1, 'string') public content!: string;
}
