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
exports.putLevel = exports.postLevel = exports.getLevel = exports.getLevels = void 0;
const level_1 = require("../models/level");
const getLevels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const levels = yield level_1.Level.find({});
        res.json(levels);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.getLevels = getLevels;
const getLevel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const level = yield level_1.Level.findById(id);
        if (!level) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            });
        }
        res.json(level);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.getLevel = getLevel;
const postLevel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const level = new level_1.Level(body);
        yield level.save();
        res.json(level);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.postLevel = postLevel;
const putLevel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const levelDB = yield level_1.Level.findById(id);
        if (!levelDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un grado con el id'
            });
        }
        const level = yield level_1.Level.findByIdAndUpdate(id, req.body, { new: true });
        res.json(level);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.putLevel = putLevel;
//# sourceMappingURL=level.js.map