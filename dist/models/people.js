"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
const mongoose_1 = require("mongoose");
const peopleSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    birthday: { type: Date, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    ubigeo: { type: String, required: true },
    address: { type: String, required: true },
    documentType: { type: String, required: true, unique: true },
    documentNumber: { type: String, required: true, unique: true },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true, versionKey: false });
exports.People = mongoose_1.model('People', peopleSchema);
//# sourceMappingURL=people.js.map