"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    name: { type: String, unique: true, required: true, lowercase: true },
    description: { type: String },
    image: { type: String },
    type: { type: String },
    level: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Level' },
    institution: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Institution' },
    section: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Section' },
    teachers: [
        {
            teacher: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
        }
    ],
    updateAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
});
exports.Course = mongoose_1.model('Course', courseSchema);
//# sourceMappingURL=course.js.map