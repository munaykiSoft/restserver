"use strict";
/*
* api/institutions
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const institution_1 = require("../controllers/institution");
const router = express_1.Router();
router.get('/', institution_1.getInstitutions);
router.get('/:id', institution_1.getInstitution);
router.post('/new', institution_1.postInstitution);
router.put('/:id', institution_1.putInstitution);
exports.default = router;
//# sourceMappingURL=institution.js.map