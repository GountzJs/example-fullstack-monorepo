import process from 'node:process';

process.loadEnvFile();

interface DBSettings {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export class Settings {
  private _port: number;
  private _host: string;
  private _db: DBSettings;

  constructor() {
    this._port = Number(process.env.PORT || 8080);
    this._host = process.env.HOST || 'localhost';
    this._db = {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 5432),
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'postgres',
    };
  }

  get port(): number {
    return this._port;
  }

  get host(): string {
    return this._host;
  }

  get db(): DBSettings {
    return this._db;
  }
}

const settings = new Settings();

export default settings;
