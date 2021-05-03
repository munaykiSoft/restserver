"use strict";
/*
* /api/levels
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const level_1 = require("../controllers/level");
const router = express_1.Router();
router.get('/', level_1.getLevel);
router.post('/new', level_1.postLevel);
// router.get('/', getLevel);
exports.default = router;
//# sourceMappingURL=level.js.map