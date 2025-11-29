import { App } from './app';
import { AppDataSource } from './db/datasource';
import { IRoutes } from './models/interfaces/routes.interface';

const routers: IRoutes[] = [];

async function bootstrap() {
  const app = new App();

  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
  }

  app.initRoutes(routers);
  app.initServer();
}

bootstrap();
