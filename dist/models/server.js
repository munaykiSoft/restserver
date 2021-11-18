"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
const user_1 = __importDefault(require("../routes/user"));
const auth_1 = __importDefault(require("../routes/auth"));
const course_1 = __importDefault(require("../routes/course"));
const image_1 = __importDefault(require("../routes/image"));
const cloudinary_1 = require("../handlers/cloudinary");
const path_1 = __importDefault(require("path"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users',
            image: '/api/image',
            institution: '/api/institutions',
            auth: '/api/login',
            course: '/api/courses'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '7000';
        this.middlwares();
        connection_1.default();
        this.routes();
    }
    middlwares() {
        this.app.use(cors_1.default());
        this.app.use('*', cloudinary_1.cloudinaryConfig);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
        this.app.use('*', (req, res) => {
            res.sendFile(path_1.default.resolve('public/index.html'));
        });
    }
    routes() {
        this.app.use(this.apiPaths.users, user_1.default);
        this.app.use(this.apiPaths.auth, auth_1.default);
        this.app.use(this.apiPaths.course, course_1.default);
        this.app.use(this.apiPaths.image, image_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map