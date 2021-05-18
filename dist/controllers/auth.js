"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuth = void 0;
const getAuth = (req, res) => {
    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;
    res.json({
        msg: 'get API - controller',
    });
};
exports.getAuth = getAuth;
//# sourceMappingURL=auth.js.map