"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTeacher = exports.getTeacher = void 0;
const teacher_1 = require("../models/teacher");
const getTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teachers = yield teacher_1.Teacher.find({}).populate('idPeople', '-createdAt -updatedAt'); //funcion populate: funcion para poblar
        res.json(teachers);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con mi tio',
            error
        });
    }
});
exports.getTeacher = getTeacher;
const postTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacher = new teacher_1.Teacher(req.body);
        yield teacher.save();
        res.json(teacher);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con mi tio',
            error
        });
    }
});
exports.postTeacher = postTeacher;
//# sourceMappingURL=teacher.js.map