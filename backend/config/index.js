import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, `/.env.develop`),
});

const config = Object.freeze({
  // Port
  serverHost: process.env.HOST,
  serverPort: process.env.PORT,

  dbHost: process.env.DATABASE_HOST,
  dbPort: process.env.DATABASE_PORT,
  dbName: process.env.DATABASE_NAME,
});

export default config;
