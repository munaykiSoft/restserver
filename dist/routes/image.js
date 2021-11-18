"use strict";
/*
* api/users
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = require("../middlewares/multer");
const image_1 = require("../controllers/image");
const router = express_1.Router();
router.post('/', [multer_1.multerUploads, image_1.postImage]);
exports.default = router;
//# sourceMappingURL=image.js.map