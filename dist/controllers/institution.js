"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstitution = void 0;
const getInstitution = (req, res) => {
    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;
    res.json({
        msg: 'get API - controller',
    });
};
exports.getInstitution = getInstitution;
//# sourceMappingURL=institution.js.map