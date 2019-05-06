export enum JobPriority {
  SUSPENDED,
  PAUSED,
  LOW,
  MEDIUM,
  HIGH,
  EXCLUSIVE,
}

export enum JobNature {
  CONSTRUCTION,
  STORAGE,
  RECRUITMENT,
}

export const JobQuota: { [priority: number]: number } = {
  [JobPriority.SUSPENDED]: 0,
  [JobPriority.PAUSED]: 0,
  [JobPriority.LOW]: 3,
  [JobPriority.MEDIUM]: 5,
  [JobPriority.HIGH]: 10,
  [JobPriority.EXCLUSIVE]: Infinity,
};
