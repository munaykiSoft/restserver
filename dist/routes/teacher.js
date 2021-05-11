"use strict";
/*
* api/teachers
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacher_1 = require("../controllers/teacher");
const router = express_1.Router();
router.get('/', teacher_1.getTeachers);
router.get('/:id', teacher_1.getTeacher);
router.post('/new', teacher_1.postTeacher);
router.put('/:id', teacher_1.putTeacher);
exports.default = router;
//# sourceMappingURL=teacher.js.map