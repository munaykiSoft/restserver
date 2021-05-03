"use strict";
/*
* api/users
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../controllers/server");
const router = express_1.Router();
router.get('/', server_1.getServer);
//# sourceMappingURL=server.js.map