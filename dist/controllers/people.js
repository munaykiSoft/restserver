"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPeople = exports.postPeople = exports.getPeople = exports.getPeoples = void 0;
const people_1 = require("../models/people");
const getPeoples = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const peoples = yield people_1.People.find({});
        res.json(peoples);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            // ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.getPeoples = getPeoples;
const getPeople = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const people = yield people_1.People.findById(id);
        if (!people) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            });
        }
        res.json(people);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            // ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.getPeople = getPeople;
const postPeople = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const people = new people_1.People(body);
        yield people.save();
        res.json(people);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            // ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.postPeople = postPeople;
const putPeople = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const peopleDB = yield people_1.People.findById(id);
        if (!peopleDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe la persona con el id'
            });
        }
        const people = yield people_1.People.findByIdAndUpdate(id, req.body, { new: true });
        res.json(people);
    }
    catch (error) {
        console.error();
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPeople = putPeople;
//# sourceMappingURL=people.js.map