"use strict";
/*
* api/users
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_1 = require("../controllers/course");
const multer_1 = require("../middlewares/multer");
const router = express_1.Router();
router.get('/', course_1.getCourse);
router.post('/', [multer_1.multerUploads, course_1.postCourse]);
exports.default = router;
//# sourceMappingURL=course%20copy.js.map