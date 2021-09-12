"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
const user_1 = __importDefault(require("../routes/user"));
const level_1 = __importDefault(require("../routes/level"));
const people_1 = __importDefault(require("../routes/people"));
const section_1 = __importDefault(require("../routes/section"));
const institution_1 = __importDefault(require("../routes/institution"));
const auth_1 = __importDefault(require("../routes/auth"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users',
            levels: '/api/levels',
            peoples: '/api/peoples',
            section: '/api/sections',
            institution: '/api/institutions',
            auth: '/api/login',
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '7000';
        this.middlwares();
        connection_1.default();
        this.routes();
    }
    middlwares() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.users, user_1.default);
        this.app.use(this.apiPaths.levels, level_1.default);
        this.app.use(this.apiPaths.peoples, people_1.default);
        this.app.use(this.apiPaths.section, section_1.default);
        this.app.use(this.apiPaths.institution, institution_1.default);
        this.app.use(this.apiPaths.auth, auth_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map