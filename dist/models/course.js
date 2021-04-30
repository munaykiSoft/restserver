"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    name: { type: String, unique: true, required: true, lowercase: true },
    description: { type: String },
    image: { type: String },
    teachers: [{ teacher: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Teacher' } }],
    modules: [{ teacher: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Module' } }],
}, { timestamps: true });
exports.Course = mongoose_1.model('Course', courseSchema);
//# sourceMappingURL=course.js.map