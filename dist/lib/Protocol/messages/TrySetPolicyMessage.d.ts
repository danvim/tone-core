import { Message } from 'protobufjs';
import { Policy } from '../../Game/Policy';
export default class TrySetPolicyMessage extends Message<TrySetPolicyMessage> {
    policyType: Policy;
}
