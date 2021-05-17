"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid
        };
        jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET || 'Qdqwerwq32asdqa34ewadf3443t', { expiresIn: '12h' }, (err, token) => {
            if (err) {
                reject('No se pudo generar JWT');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=jwt.js.map