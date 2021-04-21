"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const mongoose_1 = require("mongoose");
const moduleSchema = new mongoose_1.Schema({
    title: { type: String },
    description: { type: String },
    level: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Level' },
    institution: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Institution' },
    section: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Section' },
    course: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Course' },
    updateAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
});
exports.Module = mongoose_1.model('Module', moduleSchema);
//# sourceMappingURL=module.js.map