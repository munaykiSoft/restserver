const cloudinary = require('cloudinary').v2;
const uploader = cloudinary.uploader;

const cloudinaryConfig = (req: any, res: any, next: any) => {
    cloudinary.config({
        cloud_name: 'dieyutwim',
        api_key: '221199811629378',
        api_secret: 'ovhAOttwfbKa39NSBRxIwMZJJUc'
    });
    next();
}
export { cloudinaryConfig, uploader };
