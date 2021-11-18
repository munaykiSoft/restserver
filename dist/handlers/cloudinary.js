"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploader = exports.cloudinaryConfig = void 0;
const cloudinary = require('cloudinary').v2;
const uploader = cloudinary.uploader;
exports.uploader = uploader;
const cloudinaryConfig = (req, res, next) => {
    cloudinary.config({
        cloud_name: 'dieyutwim',
        api_key: '221199811629378',
        api_secret: 'ovhAOttwfbKa39NSBRxIwMZJJUc'
    });
    next();
};
exports.cloudinaryConfig = cloudinaryConfig;
//# sourceMappingURL=cloudinary.js.map