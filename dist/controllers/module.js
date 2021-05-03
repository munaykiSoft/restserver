"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModule = void 0;
const getModule = (req, res) => {
    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;
    res.json({
        msg: 'get API - controller',
    });
};
exports.getModule = getModule;
//# sourceMappingURL=module.js.map