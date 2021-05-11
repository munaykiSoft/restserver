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
exports.putTeacher = exports.postTeacher = exports.getTeacher = exports.getTeachers = void 0;
const teacher_1 = require("../models/teacher");
const people_1 = require("../models/people");
//Te traer todos los docentes
const getTeachers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.getTeachers = getTeachers;
//Te trae un docente por id
const getTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const teacher = yield teacher_1.Teacher.findById(id);
        if (!teacher) {
            return res.status(404).json({
                msg: 'No existe ese profesor con ese id'
            });
        }
        res.json(teacher);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.getTeacher = getTeacher;
const postTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { documentNumber } = req.body;
    try {
        const peopleDB = yield people_1.People.findOne({ documentNumber });
        if (peopleDB) {
            const teacher = new teacher_1.Teacher(req.body);
            teacher.idPeople = peopleDB._id;
            teacher.people = peopleDB;
            teacher.save();
            return res.json(teacher);
        }
        const people = new people_1.People(req.body);
        yield people.save();
        const teacher = new teacher_1.Teacher(req.body);
        teacher.idPeople = people._id;
        teacher.people = people;
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
const putTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const teacherDB = yield teacher_1.Teacher.findById(id);
        if (!teacherDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe la persona con el id'
            });
        }
        const people = yield people_1.People.findByIdAndUpdate(teacherDB.idPeople, req.body, { new: true });
        const changeTeacher = Object.assign(Object.assign({}, req.body), { people: people });
        const teacher = yield teacher_1.Teacher.findByIdAndUpdate(id, changeTeacher, { new: true });
        res.json(teacher);
    }
    catch (error) {
        console.error();
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTeacher = putTeacher;
//# sourceMappingURL=teacher.js.map