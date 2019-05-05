"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JobPriority;
(function (JobPriority) {
    JobPriority[JobPriority["SUSPENDED"] = 0] = "SUSPENDED";
    JobPriority[JobPriority["PAUSED"] = 1] = "PAUSED";
    JobPriority[JobPriority["LOW"] = 2] = "LOW";
    JobPriority[JobPriority["MEDIUM"] = 3] = "MEDIUM";
    JobPriority[JobPriority["HIGH"] = 4] = "HIGH";
    JobPriority[JobPriority["EXCLUSIVE"] = 5] = "EXCLUSIVE";
})(JobPriority = exports.JobPriority || (exports.JobPriority = {}));
var JobNature;
(function (JobNature) {
    JobNature[JobNature["CONSTRUCTION"] = 0] = "CONSTRUCTION";
    JobNature[JobNature["STORAGE"] = 1] = "STORAGE";
    JobNature[JobNature["RECRUITMENT"] = 2] = "RECRUITMENT";
})(JobNature = exports.JobNature || (exports.JobNature = {}));
