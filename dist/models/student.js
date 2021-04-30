"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    idPeople: { type: mongoose_1.Schema.Types.ObjectId, ref: 'People' },
    people: {
        name: String,
        lastName: String,
        documentNumber: String
    },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    courses: [{ teacher: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Course' } }],
    levels: [{ level: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Level' } }],
}, { timestamps: true });
exports.Student = mongoose_1.model('Student', studentSchema);
//# sourceMappingURL=student.js.map