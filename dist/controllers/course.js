"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourse = void 0;
const getCourse = (req, res) => {
    console.log('hola mundo');
    // const { nombre = 'No name' } = req.query;
    res.json({
        msg: 'get API - controller',
    });
};
exports.getCourse = getCourse;
//# sourceMappingURL=course.js.map