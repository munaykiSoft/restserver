"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institution = void 0;
const mongoose_1 = require("mongoose");
const institutionSchema = new mongoose_1.Schema({
    name: { type: String, unique: true, required: true, lowercase: true },
    shortName: { type: String, lowercase: true },
    description: { type: String },
    image: { type: String },
    address: { type: String },
    ubigeo: { type: String },
    category: { type: String, required: true, enum: ['primaria', 'secundaria'] },
    updateAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
});
exports.Institution = mongoose_1.model('Institution', institutionSchema);
//# sourceMappingURL=institution.js.map