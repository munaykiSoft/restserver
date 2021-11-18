import multer from 'multer';
import Datauri from 'datauri/parser';
import path from 'path';
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('file');
const dUri: any = new Datauri();


const dataUri = (req: any) => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
export { multerUploads, dataUri };
