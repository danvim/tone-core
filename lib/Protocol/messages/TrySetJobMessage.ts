import { Field, Message, Type } from 'protobufjs';
import { JobPriority, JobNature } from '../../Game/Job';

@Type.d('TrySetJobMessage')
export default class TrySetJobMessage extends Message<TrySetJobMessage> {
  @Field.d(1, 'string') public jobId!: string;
  @Field.d(2, JobPriority) public priority!: JobPriority;
}
