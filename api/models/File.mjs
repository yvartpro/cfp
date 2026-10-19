import { Model, DataTypes } from 'sequelize';
export default class File extends Model {
  static initModel(sequelize) { return File.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true }, original_name: { type: DataTypes.STRING, allowNull: false },
    stored_name: { type: DataTypes.STRING, allowNull: false }, path: { type: DataTypes.STRING, allowNull: false }, mime_type: { type: DataTypes.STRING, allowNull: false },
    size: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }, description: DataTypes.TEXT, use_as: DataTypes.ENUM('banner','carousel','logo','head_message','about'),
    uploaded_by: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  }, { sequelize, modelName: 'File', tableName: 'cfp_files', timestamps: true, paranoid: true }); }
}
