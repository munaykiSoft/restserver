import express, { Application } from "express";
import cors from "cors";
import dbConnection from '../db/connection';
import userRoutes from '../routes/user';
import levelRoutes from '../routes/level';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
        levels: '/api/levels'
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
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}

export default Server;