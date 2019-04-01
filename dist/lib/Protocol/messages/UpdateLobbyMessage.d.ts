import { Message } from 'protobufjs';
export default class UpdateLobbyMessage extends Message<UpdateLobbyMessage> {
    playerId: number;
    username: string;
    connId: string;
}
