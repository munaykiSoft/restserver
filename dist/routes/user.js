"use strict";
/**
 * api/users
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = express_1.Router();
router.get('/', user_1.getUsers);
// router.put('/:id', userPut);
router.post('/', user_1.postUser);
// router.delete('/', userDelete);
// router.patch('/', userPatch);
exports.default = router;
//# sourceMappingURL=user.js.map