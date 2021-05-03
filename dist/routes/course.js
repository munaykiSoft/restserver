"use strict";
/*
* api/users
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_1 = require("../controllers/course");
const router = express_1.Router();
router.get('/', course_1.getCourse);
//# sourceMappingURL=course.js.map