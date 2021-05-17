"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateJWT = (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
    }
    try {
        const decode = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'Qdqwerwq32asdqa34ewadf3443t');
        req.uid = decode.uid;
        next();
    }
    catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'token incorrecto'
        });
    }
};
exports.validateJWT = validateJWT;
//# sourceMappingURL=validate-jwt.js.map