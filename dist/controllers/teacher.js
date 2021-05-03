"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeacher = void 0;
const getTeacher = (req, res) => {
    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;
    res.json({
        msg: 'get API - controller',
    });
};
exports.getTeacher = getTeacher;
//# sourceMappingURL=teacher.js.map