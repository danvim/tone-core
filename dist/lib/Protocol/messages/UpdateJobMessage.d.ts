import { Message } from 'protobufjs';
import { JobPriority, JobNature } from '../../Game/Job';
import { ResourceType } from '../../Game/Building';
export default class UpdateJobMessage extends Message<UpdateJobMessage> {
    jobId: string;
    buildingId: string;
    workerIds: string[];
    priority: JobPriority;
    nature: JobNature;
    resourceType: ResourceType;
}
