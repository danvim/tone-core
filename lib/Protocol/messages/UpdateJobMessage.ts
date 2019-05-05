import { Field, Message } from 'protobufjs';
import { JobPriority, JobNature } from '../../Game/Job';

export default class UpdateJobMessage extends Message<UpdateJobMessage> {
  @Field.d(1, 'string') public jobId!: string;
  @Field.d(2, 'string') public buildingId!: string;
  @Field.d(3, 'string', 'repeated') public workerIds!: string[];
  @Field.d(4, JobPriority) public priority!: JobPriority;
  @Field.d(5, JobNature) public nature!: JobNature;
}
