import { DatabaseConfig } from '../utils/DatabaseConfig';
import { AppConfig } from '../utils/AppConfig';

export default (): { db: DatabaseConfig; app: AppConfig } => ({
  app: {
    port: parseInt(process.env.APP_PORT) || 3000,
  },
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PROT),
  },
});
