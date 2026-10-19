import { Model, DataTypes } from 'sequelize';
export default class Filiere extends Model {
  static initModel(sequelize) { return Filiere.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true }, name: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false, unique: true }, hero_img_id: DataTypes.INTEGER.UNSIGNED, description: DataTypes.TEXT,
    is_active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
  }, { sequelize, modelName: 'Filiere', tableName: 'cfp_filieres', timestamps: true, paranoid: true }); }
}
