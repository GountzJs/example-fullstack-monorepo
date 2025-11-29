import { DataSource } from 'typeorm';
import settings from '../settings';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: settings.db.host,
  port: settings.db.port,
  username: settings.db.user,
  password: settings.db.password,
  database: settings.db.database,
  entities: [__dirname + '/entities/*.entity.ts'],
  migrations: [],
  synchronize: true,
});
