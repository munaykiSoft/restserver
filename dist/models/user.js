"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    role: { type: String, required: true, default: 'USER' },
    status: { type: Boolean, default: true },
    token: { type: String, required: false },
    expiration: { type: Date, required: false },
}, { timestamps: true });
userSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
};
exports.User = mongoose_1.model('User', userSchema);
//# sourceMappingURL=user.js.map