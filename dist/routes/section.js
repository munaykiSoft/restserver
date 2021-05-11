"use strict";
/*
* api/sections
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const section_1 = require("../controllers/section");
const router = express_1.Router();
router.get('/', section_1.getSections);
router.get('/:id', section_1.getSection);
router.post('/new', section_1.postSection);
router.put('/:id', section_1.putSection);
exports.default = router;
//# sourceMappingURL=section.js.map