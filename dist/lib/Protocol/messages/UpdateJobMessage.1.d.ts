import { Message } from 'protobufjs';
import { JobPriority, JobNature } from '../../Game/Job';
export default class UpdateJobMessage extends Message<UpdateJobMessage> {
    jobId: string;
    buildingId: string;
    workerIds: string[];
    priority: JobPriority;
    nature: JobNature;
}
