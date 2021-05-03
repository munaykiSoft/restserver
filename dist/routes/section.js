"use strict";
/*
* api/users
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const section_1 = require("../controllers/section");
const router = express_1.Router();
router.get('/', section_1.getSection);
//# sourceMappingURL=section.js.map