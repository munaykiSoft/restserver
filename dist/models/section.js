"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const mongoose_1 = require("mongoose");
const sectionSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
}, { timestamps: true });
exports.Section = mongoose_1.model('Section', sectionSchema);
//# sourceMappingURL=section.js.map