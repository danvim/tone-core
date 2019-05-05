import { Message } from 'protobufjs';
import { JobPriority } from '../../Game/Job';
export default class TrySetJobMessage extends Message<TrySetJobMessage> {
    jobId: string;
    priority: JobPriority;
}
