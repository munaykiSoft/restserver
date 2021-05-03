"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLevel = void 0;
const getLevel = (req, res) => {
    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;
    res.json({
        msg: 'get API - controller',
    });
};
exports.getLevel = getLevel;
//# sourceMappingURL=level.js.map