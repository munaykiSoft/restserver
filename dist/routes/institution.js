"use strict";
/*
* api/users
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const institution_1 = require("../controllers/institution");
const router = express_1.Router();
router.get('/', institution_1.getInstitution);
//# sourceMappingURL=institution.js.map