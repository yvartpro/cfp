import { Model, DataTypes } from 'sequelize';
const extractFileIds = (value, ids = new Set()) => {
  if (!value) return ids;
  if (Array.isArray(value)) value.forEach(item => extractFileIds(item, ids));
  else if (typeof value === 'object') for (const [key, child] of Object.entries(value)) {
    if (/^(file|image)(_)?id$/i.test(key) && child) ids.add(child);
    extractFileIds(child, ids);
  }
  return ids;
};

export default class Article extends Model {
  static initModel(sequelize) { return Article.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true }, title: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false, unique: true }, excerpt: DataTypes.TEXT,
    content: { type: DataTypes.JSON, allowNull: false, defaultValue: { sections: [] } }, category: { type: DataTypes.ENUM('GENERAL','FILIERE','SERVICE'), allowNull: false, defaultValue: 'GENERAL' },
    view_count: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, defaultValue: 0 }, filiere_id: DataTypes.INTEGER.UNSIGNED, service_id: DataTypes.INTEGER.UNSIGNED,
    status: { type: DataTypes.ENUM('DRAFT','PUBLISHED'), allowNull: false, defaultValue: 'DRAFT' }, published_at: DataTypes.DATE,
    author_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }, hero_image_id: DataTypes.INTEGER.UNSIGNED,
  }, {
    sequelize, modelName: 'Article', tableName: 'cfp_articles', timestamps: true, paranoid: true,
    hooks: { async afterSave(article) {
      try {
        const ids = extractFileIds(article.content);
        if (article.hero_image_id) ids.add(article.hero_image_id);
        await article.setContentFiles([...ids]);
      } catch (error) { console.error('Error syncing article files:', error); }
    } },
  }); }
}
