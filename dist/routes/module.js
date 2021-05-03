"use strict";
/*
* api/users
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const module_1 = require("../controllers/module");
const router = express_1.Router();
router.get('/', module_1.getModule);
//# sourceMappingURL=module.js.map