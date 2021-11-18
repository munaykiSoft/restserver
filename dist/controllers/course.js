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
exports.postImage = exports.postCourse = exports.all = exports.get = void 0;
const multer_1 = require("../middlewares/multer");
const course_1 = require("../models/course");
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const course = yield course_1.Course.findById({ _id: id }).populate('teachers');
        res.json(course);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin :v'
        });
    }
});
exports.get = get;
const all = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield course_1.Course.find({});
        res.json(courses);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin :v'
        });
    }
});
exports.all = all;
const postCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const course = new course_1.Course(body);
        yield course.save();
        res.json(course);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin :v'
        });
    }
});
exports.postCourse = postCourse;
const postImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = multer_1.dataUri(req).content;
    }
    catch (error) {
    }
});
exports.postImage = postImage;
//# sourceMappingURL=course.js.map