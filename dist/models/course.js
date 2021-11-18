"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String, default: 'https://www.kenyons.com/wp-content/uploads/2017/04/default-image.jpg' },
    publicId: { type: String },
    teachers: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }],
    students: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }],
    sections: [{
            name: { type: String },
            modules: [{
                    title: { type: String },
                    subtitle: { type: String },
                    description: { type: String },
                    video: { type: String }
                }, { timestamps: true, versionKey: false }]
        }],
    status: { type: Boolean, default: true }
}, { timestamps: true, versionKey: false });
exports.Course = mongoose_1.model('Course', courseSchema);
//# sourceMappingURL=course.js.map