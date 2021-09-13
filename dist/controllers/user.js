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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.getUser = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.User.findById(req.uid).populate('people');
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
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, username } = req.body;
    try {
        const userDB = yield user_1.User.findOne({ username });
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