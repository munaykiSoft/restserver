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
exports.putInstitution = exports.postInstitution = exports.getInstitution = exports.getInstitutions = void 0;
const institution_1 = require("../models/institution");
const getInstitutions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const institutions = yield institution_1.Institution.find({});
        res.json(institutions);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.getInstitutions = getInstitutions;
const getInstitution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const institution = yield institution_1.Institution.findById(id);
        if (!institution) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            });
        }
        res.json(institution);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.getInstitution = getInstitution;
const postInstitution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const institution = new institution_1.Institution(body);
        yield institution.save();
        res.json(institution);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.postInstitution = postInstitution;
const putInstitution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const institutionDB = yield institution_1.Institution.findById(id);
        if (!institutionDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            });
        }
        const institution = yield institution_1.Institution.findByIdAndUpdate(id, req.body, { new: true });
        res.json(institution);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.putInstitution = putInstitution;
//# sourceMappingURL=institution.js.map