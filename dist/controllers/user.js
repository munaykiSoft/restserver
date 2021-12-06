"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.get = exports.all = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const all = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { q } = req.query;
    const regex = new RegExp(q, 'i');
    const pageSize = +req.query.pagesize || 1000;
    const currentPage = +req.query.page;
    try {
        const [users, total] = yield Promise.all([
            user_1.User.find({ status: true })
                .or([{ 'name': regex }, { 'lastname': regex }, { 'cedula': regex }])
                .skip(pageSize * (currentPage - 1))
                .limit(pageSize)
                .sort({ _id: -1 }),
            user_1.User.countDocuments({ status: true })
                .or([{ 'name': regex }, { 'lastname': regex }, { 'cedula': regex }])
        ]);
        res.json({
            users,
            total,
            pageSize
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.all = all;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.User.findById(req.uid);
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin :v'
        });
    }
});
exports.get = get;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { password, cedula } = _a, body = __rest(_a, ["password", "cedula"]);
    try {
        const userDB = yield user_1.User.findOne({ cedula });
        if (userDB) {
            return res.status(400).json({
                msg: 'Ya se encuentra registrado el usuario'
            });
        }
        const user = new user_1.User(req.body);
        // Encriptar password
        const salt = bcrypt_1.default.genSaltSync();
        user.password = bcrypt_1.default.hashSync(password, salt);
        yield user.save();
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin :v'
        });
    }
});
exports.postUser = postUser;
// const userPut = (res, res = response) => {
//     const { id } = req.params;
//     res.json({
//         msg: 'put API - userPUT',
//     })
// }
//# sourceMappingURL=user.js.map