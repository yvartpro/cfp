export default ({ User, Filiere, Service, Article, File, ArticleFile }) => {
  /** User associations */
  User.hasMany(Article, { foreignKey: 'author_id', as: 'articles', onDelete: 'RESTRICT' })
  Article.belongsTo(User, { foreignKey: 'author_id', as: 'author' })

  User.hasMany(File, { foreignKey: 'uploaded_by', as: 'files', onDelete: 'RESTRICT' })
  File.belongsTo(User, { foreignKey: 'uploaded_by', as: 'uploader' })

  User.belongsTo(File, { foreignKey: 'profile_img', as: 'profileImage' })

  /** Filiere associations */
  Filiere.hasMany(Article, { foreignKey: 'filiere_id', as: 'articles', onDelete: 'SET NULL' })
  Article.belongsTo(Filiere, { foreignKey: 'filiere_id', as: 'filiere' })

  Filiere.belongsTo(File, { foreignKey: 'hero_img_id', as: 'heroImage' })

  /** Service associations */
  Service.hasMany(Article, { foreignKey: 'service_id', as: 'articles', onDelete: 'SET NULL' })
  Article.belongsTo(Service, { foreignKey: 'service_id', as: 'service' })

  Service.belongsTo(File, { foreignKey: 'hero_img_id', as: 'heroImage' })

  /** Article associations */
  Article.belongsTo(File, { foreignKey: 'hero_image_id', as: 'heroImage' })

  /** Article content files (M:N) */
  Article.belongsToMany(File, { through: ArticleFile, as: 'contentFiles', foreignKey: 'article_id', otherKey: 'file_id' })
  File.belongsToMany(Article, { through: ArticleFile, as: 'inContentArticles', foreignKey: 'file_id', otherKey: 'article_id' })
}
