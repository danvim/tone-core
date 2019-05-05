import { Field, Message } from 'protobufjs';
import { JobPriority, JobNature } from '../../Game/Job';

export default class TrySetJobMessage extends Message<TrySetJobMessage> {
  @Field.d(1, 'string') public jobId!: string;
  @Field.d(2, JobPriority) public priority!: JobPriority;
}
