import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';

import './src/database';

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
  }
}

export default new App().app;
