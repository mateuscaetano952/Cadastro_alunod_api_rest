import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

import './src/database';
import TokenController from './src/controllers/TokenController';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(homeRoutes);
    this.app.use(userRoutes);
    this.app.use(tokenRoutes);
    this.app.use(alunoRoutes);
    this.app.use(fotoRoutes);
  }
}

export default new App().app;
