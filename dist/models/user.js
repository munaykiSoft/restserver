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
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    role: { type: String, required: true, default: 'USER' },
    idTeacher: { type: String },
    idStudent: { type: String },
    people: {
        name: String,
        lastname: String,
        dni: String,
        email: String
    },
    status: { type: Boolean, default: true },
    token: { type: String, required: false },
    expiration: { type: Date, required: false },
}, { timestamps: true });
userSchema.methods.toJSON = function () {
    let user = this;
    const _a = user.toObject(), { __v, _id, password } = _a, object = __rest(_a, ["__v", "_id", "password"]);
    object.uid = _id;
    return object;
};
exports.User = mongoose_1.model('User', userSchema);
//# sourceMappingURL=user.js.map