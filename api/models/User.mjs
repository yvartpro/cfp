import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
export default class User extends Model {
  static initModel(sequelize) { return User.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true }, name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true }, role: { type: DataTypes.ENUM('admin','editor'), allowNull: false },
    profile_img: DataTypes.INTEGER.UNSIGNED, is_active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    password: { type: DataTypes.STRING, allowNull: false },
  }, { sequelize, modelName: 'User', tableName: 'cfp_users', timestamps: true, paranoid: true, hooks: { async beforeSave(user) { if (user.changed('password')) user.password = await bcrypt.hash(user.password, 10); } } }); }
  static associate({ Article, File }) { User.hasMany(Article, { foreignKey: 'author_id', as: 'articles' }); User.hasMany(File, { foreignKey: 'uploaded_by', as: 'files' }); User.belongsTo(File, { foreignKey: 'profile_img', as: 'profileImage' }); }
  async validatePassword(password) { return bcrypt.compare(password, this.password); }
}
