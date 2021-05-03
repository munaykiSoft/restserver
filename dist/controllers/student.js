"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudent = void 0;
const getStudent = (req, res) => {
    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;
    res.json({
        msg: 'get API - controller',
    });
};
exports.getStudent = getStudent;
//# sourceMappingURL=student.js.map