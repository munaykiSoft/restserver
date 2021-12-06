"use strict";
/*
 * api/users
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = express_1.Router();
router.get('/', validate_jwt_1.validateJWT, user_1.all);
router.get('/:id', user_1.get);
// router.put('/:id', userPut);
router.post('/', user_1.postUser);
// router.delete('/', userDelete);
// router.patch('/', userPatch);
exports.default = router;
//# sourceMappingURL=user.js.map