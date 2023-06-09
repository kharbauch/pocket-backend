export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface SequelizeModuleOptions {
  dialect: 'mssql';
  models?: Array<string>;
}
