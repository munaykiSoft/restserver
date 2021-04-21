"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleDetail = void 0;
const mongoose_1 = require("mongoose");
const moduleDetailSchema = new mongoose_1.Schema({
    title: { type: String },
    description: { type: String },
    details: [
        {
            title: { type: String },
            image: { type: String },
            description: { type: String },
        },
    ],
    level: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Level' },
    institution: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Institution' },
    section: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Section' },
    course: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Course' },
    module: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Module' },
    updateAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
});
exports.ModuleDetail = mongoose_1.model('ModuleDetail', moduleDetailSchema);
//# sourceMappingURL=module-detail.js.map