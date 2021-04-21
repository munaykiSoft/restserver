"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const mongoose_1 = require("mongoose");
const sectionSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    type: { type: String },
    teachers: [
        {
            teacher: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
        }
    ],
    students: [
        {
            student: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }
        }
    ],
    level: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Level' },
    institution: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Institution' },
    updateAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
});
exports.Section = mongoose_1.model('Section', sectionSchema);
//# sourceMappingURL=section.js.map