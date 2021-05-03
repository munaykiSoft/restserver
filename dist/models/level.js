"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
const mongoose_1 = require("mongoose");
const levelSchema = new mongoose_1.Schema({
    name: { type: String, unique: true, required: true, lowercase: true },
    order: { type: Number, required: true },
    description: { type: String },
}, { timestamps: true, versionKey: false });
exports.Level = mongoose_1.model('Level', levelSchema);
//# sourceMappingURL=level.js.map