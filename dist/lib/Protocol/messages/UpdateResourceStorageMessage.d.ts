import { Message } from 'protobufjs';
export default class UpdateResourceStorageMessage extends Message<UpdateResourceStorageMessage> {
    uid: string;
    struct: number;
    trainingData: number;
    primeData: number;
}
