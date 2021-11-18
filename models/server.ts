import express, { Application } from "express";
import cors from "cors";
import dbConnection from '../db/connection';
import userRoutes from '../routes/user';
import authRoutes from '../routes/auth';
import courseRoutes from '../routes/course';
import imageRoutes from '../routes/image';
import { cloudinaryConfig } from "../handlers/cloudinary";
import path from 'path';


class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
        image: '/api/image',
        institution: '/api/institutions',
        auth: '/api/login',
        course: '/api/courses'
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
        this.app.use('*', cloudinaryConfig);
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.course, courseRoutes);
        this.app.use(this.apiPaths.image, imageRoutes);
        this.app.use('*', (req: any, res: any) => {
            res.sendFile(path.resolve('public/index.html'))
        });
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}

export default Server;