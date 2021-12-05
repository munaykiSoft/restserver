"use strict";
/*
 * api/login
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const user_1 = require("../controllers/user");
const router = express_1.Router();
router.post('/', auth_1.login);
router.get('/info', [validate_jwt_1.validateJWT, user_1.get]);
router.get('/renew', validate_jwt_1.validateJWT, auth_1.revalidateToken);
exports.default = router;
//# sourceMappingURL=auth.js.map