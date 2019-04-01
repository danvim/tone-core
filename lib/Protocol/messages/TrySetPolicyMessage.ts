import {Field, Message, Type} from 'protobufjs';
import {Policy} from '../../Game/Policy';

@Type.d('TrySetPolicyMessage')
export default class TrySetPolicyMessage extends Message<TrySetPolicyMessage> {
  @Field.d(1, Policy) public policyType!: Policy;
}
