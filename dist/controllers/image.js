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
exports.postImage = void 0;
const cloudinary_1 = require("../handlers/cloudinary");
const multer_1 = require("../middlewares/multer");
const postImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = multer_1.dataUri(req).content;
        const { public_id, eager } = yield cloudinary_1.uploader.upload(file, {
            use_filename: false,
            format: 'webp',
            eager: [
                { width: 360, height: 266, crop: 'pad' }
            ]
        });
        res.json({
            id: public_id,
            url: eager[0].secure_url
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin :v'
        });
    }
});
exports.postImage = postImage;
//# sourceMappingURL=image.js.map