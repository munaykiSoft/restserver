"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const mongoose_1 = require("mongoose");
const teacherSchema = new mongoose_1.Schema({
    idPeople: { type: mongoose_1.Schema.Types.ObjectId, ref: 'People' },
    people: {
        name: String,
        lastname: String,
        documentNumber: String
    },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true, versionKey: false });
exports.Teacher = mongoose_1.model('Teacher', teacherSchema);
//# sourceMappingURL=teacher.js.map