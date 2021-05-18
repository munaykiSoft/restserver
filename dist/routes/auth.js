"use strict";
/*
 * api/login
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const router = express_1.Router();
router.post('/', auth_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map