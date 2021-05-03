"use strict";
/*
* api/users
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const people_1 = require("../controllers/people");
const router = express_1.Router();
router.get('/', people_1.getPeople);
//# sourceMappingURL=people.js.map