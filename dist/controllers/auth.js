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
exports.revalidateToken = exports.login = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../helpers/jwt");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cedula, password } = req.body;
    try {
        const userDB = yield user_1.User.findOne({ cedula });
        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario y/o contraseña incorrecto'
            });
        }
        const validPassword = bcrypt_1.default.compareSync(password, userDB.password);
        if (!validPassword) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario y/o contraseña incorrecto'
            });
        }
        console.log(userDB);
        const token = yield jwt_1.generateJWT(userDB._id);
        res.json({
            ok: true,
            token,
            uid: userDB.id,
            name: `${userDB.name} ${userDB.lastname}`
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.login = login;
const revalidateToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req;
    const token = yield jwt_1.generateJWT(uid);
    const userDB = yield user_1.User.findById(uid);
    res.json({
        ok: true,
        token,
        uid: userDB === null || userDB === void 0 ? void 0 : userDB.id,
        name: `${userDB === null || userDB === void 0 ? void 0 : userDB.name} ${userDB === null || userDB === void 0 ? void 0 : userDB.lastname}`
    });
});
exports.revalidateToken = revalidateToken;
//# sourceMappingURL=auth.js.map