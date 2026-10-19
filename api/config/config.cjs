require('dotenv').config({ path: require('path').resolve('../.env') });
require('dotenv').config();
const config = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: Number(process.env.DATABASE_PORT || 3306),
  dialect: process.env.DATABASE_DIALECT || 'mysql',
};
module.exports = { development: config, test: config, production: config };
