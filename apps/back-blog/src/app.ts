import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { IRoutes } from './models/interfaces/routes.interface';
import settings from './settings';

export class App {
  private app: express.Application;
  private basePath: string;

  constructor() {
    this.app = express();
    this.basePath = '/api';
    this.initMiddlewares();
  }

  private initMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors({ origin: '*' }));
    this.app.use(morgan('dev'));
  }

  initRoutes(routers: IRoutes[]): void {
    routers.map((router) => {
      this.app.use(this.basePath + router.path, router.router);
    });
  }

  initServer(): void {
    this.app.listen(settings.port, settings.host, () => {
      console.log(
        `🚀 Server running on port http://${settings.host}:${settings.port}`
      );
    });
  }
}
