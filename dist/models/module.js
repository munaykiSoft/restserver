"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const mongoose_1 = require("mongoose");
const moduleSchema = new mongoose_1.Schema({
    title: { type: String },
    description: { type: String },
    detail: [{
            title: { type: String },
            description: { type: String },
        }, { timestamps: true }]
}, { timestamps: true, versionKey: false });
exports.Module = mongoose_1.model('Module', moduleSchema);
//# sourceMappingURL=module.js.map