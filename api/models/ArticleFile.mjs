import { Model, DataTypes } from 'sequelize';
export default class ArticleFile extends Model {
  static initModel(sequelize) { return ArticleFile.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true }, article_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }, file_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  }, { sequelize, modelName: 'ArticleFile', tableName: 'cfp_article_files', timestamps: false }); }
}
