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
exports.putSection = exports.postSection = exports.getSection = exports.getSections = void 0;
const section_1 = require("../models/section");
const getSections = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const section = yield section_1.Section.find({});
        res.json(section);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.getSections = getSections;
const getSection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const section = yield section_1.Section.findById(id);
        if (!section) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            });
        }
        res.json(section);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.getSection = getSection;
const postSection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const section = new section_1.Section(body);
        yield section.save();
        res.json(section);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.postSection = postSection;
const putSection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const sectionDB = yield section_1.Section.findById(id);
        if (!sectionDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            });
        }
        const section = yield section_1.Section.findByIdAndUpdate(id, req.body, { new: true });
        res.json(section);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.putSection = putSection;
//# sourceMappingURL=section.js.map