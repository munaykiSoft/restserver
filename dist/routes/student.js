"use strict";
/*
* api/users
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = require("../controllers/student");
const router = express_1.Router();
router.get('/', student_1.getStudent);
//# sourceMappingURL=student.js.map