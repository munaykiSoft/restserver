"use strict";
/*
* api/users
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacher_1 = require("../controllers/teacher");
const router = express_1.Router();
router.get('/', teacher_1.getTeacher);
//# sourceMappingURL=teacher.js.map