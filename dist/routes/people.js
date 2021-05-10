"use strict";
/*
* api/peoples
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const people_1 = require("../controllers/people");
const router = express_1.Router();
router.get('/', people_1.getPeoples);
router.get('/:id', people_1.getPeople);
router.post('/new', people_1.postPeople);
router.put('/:id', people_1.putPeople);
exports.default = router;
//# sourceMappingURL=people.js.map