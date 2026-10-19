import { Model, DataTypes } from 'sequelize';
export default class Service extends Model {
  static initModel(sequelize) { return Service.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true }, name: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false, unique: true }, description: DataTypes.TEXT,
    is_active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }, hero_img_id: DataTypes.INTEGER.UNSIGNED,
  }, { sequelize, modelName: 'Service', tableName: 'cfp_services', timestamps: true, paranoid: true }); }
}
