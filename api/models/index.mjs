import { Sequelize } from 'sequelize';
import 'dotenv/config';
import User from './User.mjs';
import File from './File.mjs';
import Filiere from './Filiere.mjs';
import Service from './Service.mjs';
import Article from './Article.mjs';
import ArticleFile from './ArticleFile.mjs';
import applyAssociations from './associations.mjs';

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST || '127.0.0.1', port: Number(process.env.DATABASE_PORT || 3306),
  dialect: process.env.DATABASE_DIALECT || 'mysql', logging: false,
});
for (const ModelClass of [User, File, Filiere, Service, Article, ArticleFile]) ModelClass.initModel(sequelize);
applyAssociations({ User, File, Filiere, Service, Article, ArticleFile });
const db = { sequelize, Sequelize, User, File, Filiere, Service, Article, ArticleFile };
export { sequelize, Sequelize, User, File, Filiere, Service, Article, ArticleFile };
export default db;
