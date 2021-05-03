"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSection = void 0;
const getSection = (req, res) => {
    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;
    res.json({
        msg: 'get API - controller',
    });
};
exports.getSection = getSection;
//# sourceMappingURL=section.js.map