import express, { Application } from "express";
import cors from "cors";
import dbConnection from '../db/connection';
import userRoutes from '../routes/user';
import levelRoutes from '../routes/level';
import peopleRoutes from '../routes/people';
import teacherRoutes from '../routes/teacher';
import sectionRoutes from '../routes/section';
import institutionRoutes from '../routes/institution';



class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
        levels: '/api/levels',
        peoples: '/api/peoples',
        teacher: '/api/teachers',
        section: '/api/sections',
        institution: '/api/institutions'

        
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '7000';

        this.middlwares();
        dbConnection();
        this.routes();
    }

    middlwares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.levels, levelRoutes);
        this.app.use(this.apiPaths.peoples, peopleRoutes);
        this.app.use(this.apiPaths.teacher, teacherRoutes);
        this.app.use(this.apiPaths.section, sectionRoutes);
        this.app.use(this.apiPaths.institution, institutionRoutes);

    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}

export default Server;