import { Message } from 'protobufjs';
export default class ChatMessage extends Message<ChatMessage> {
    content: string;
}
