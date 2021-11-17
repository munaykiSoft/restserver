"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    password: { type: String, required: true },
    image: { type: String },
    role: { type: String, required: false, default: 'STUDENT' },
    status: { type: Boolean, default: true },
    token: { type: String, required: false },
    expiration: { type: Date, required: false },
    // Datos personales
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    birthday: { type: Date, required: false },
    gender: { type: String, required: false },
    email: { type: String, required: false },
    department: { type: String, required: false },
    province: { type: String, required: false },
    district: { type: String, required: false },
    address: { type: String, required: false },
    cedula: { type: String, required: false, unique: true },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true, versionKey: false });
userSchema.methods.toJSON = function () {
    let user = this;
    const _a = user.toObject(), { __v, _id, password } = _a, object = __rest(_a, ["__v", "_id", "password"]);
    object.uid = _id;
    return object;
};
exports.User = mongoose_1.model('User', userSchema);
//# sourceMappingURL=user.js.map