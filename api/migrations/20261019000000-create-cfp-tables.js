'use strict';

class CreateCfpTables {
  async up(queryInterface, Sequelize) {
    const timestamps = {
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE, allowNull: true },
    };
    await queryInterface.createTable('cfp_users', {
      id: { type: Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false }, email: { type: Sequelize.STRING, allowNull: false },
      role: { type: Sequelize.ENUM('admin', 'editor'), allowNull: false },
      profile_img: { type: Sequelize.INTEGER.UNSIGNED, allowNull: true },
      is_active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
      password: { type: Sequelize.STRING, allowNull: false }, ...timestamps,
    });
    await queryInterface.createTable('cfp_files', {
      id: { type: Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
      original_name: { type: Sequelize.STRING, allowNull: false }, stored_name: { type: Sequelize.STRING, allowNull: false },
      path: { type: Sequelize.STRING, allowNull: false }, mime_type: { type: Sequelize.STRING, allowNull: false },
      size: { type: Sequelize.INTEGER.UNSIGNED, allowNull: false }, description: { type: Sequelize.TEXT, allowNull: true },
      uploaded_by: { type: Sequelize.INTEGER.UNSIGNED, allowNull: false }, ...timestamps,
      use_as: { type: Sequelize.ENUM('banner', 'carousel', 'logo', 'head_message', 'about'), allowNull: true },
    });
    await queryInterface.createTable('cfp_filieres', {
      id: { type: Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false }, slug: { type: Sequelize.STRING, allowNull: false, unique: true },
      hero_img_id: { type: Sequelize.INTEGER.UNSIGNED, allowNull: true }, description: { type: Sequelize.TEXT, allowNull: true },
      is_active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true }, ...timestamps,
    });
    await queryInterface.createTable('cfp_services', {
      id: { type: Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false }, slug: { type: Sequelize.STRING, allowNull: false, unique: true },
      description: { type: Sequelize.TEXT, allowNull: true }, is_active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
      hero_img_id: { type: Sequelize.INTEGER.UNSIGNED, allowNull: true }, ...timestamps,
    });
    await queryInterface.createTable('cfp_articles', {
      id: { type: Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING, allowNull: false }, slug: { type: Sequelize.STRING, allowNull: false, unique: true },
      excerpt: { type: Sequelize.TEXT, allowNull: true }, content: { type: Sequelize.JSON, allowNull: false },
      category: { type: Sequelize.ENUM('GENERAL', 'FILIERE', 'SERVICE'), allowNull: false, defaultValue: 'GENERAL' },
      view_count: { type: Sequelize.INTEGER.UNSIGNED, allowNull: false, defaultValue: 0 },
      filiere_id: { type: Sequelize.INTEGER.UNSIGNED, allowNull: true }, service_id: { type: Sequelize.INTEGER.UNSIGNED, allowNull: true },
      status: { type: Sequelize.ENUM('DRAFT', 'PUBLISHED'), allowNull: false, defaultValue: 'DRAFT' },
      published_at: { type: Sequelize.DATE, allowNull: true }, author_id: { type: Sequelize.INTEGER.UNSIGNED, allowNull: false },
      hero_image_id: { type: Sequelize.INTEGER.UNSIGNED, allowNull: true }, ...timestamps,
    });
    await queryInterface.createTable('cfp_article_files', {
      id: { type: Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
      article_id: { type: Sequelize.INTEGER.UNSIGNED, allowNull: false }, file_id: { type: Sequelize.INTEGER.UNSIGNED, allowNull: false },
    });
    await queryInterface.addConstraint('cfp_users', { fields: ['profile_img'], type: 'foreign key', name: 'cfp_users_profile_img_fk', references: { table: 'cfp_files', field: 'id' }, onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    await queryInterface.addConstraint('cfp_files', { fields: ['uploaded_by'], type: 'foreign key', name: 'cfp_files_uploaded_by_fk', references: { table: 'cfp_users', field: 'id' }, onUpdate: 'CASCADE' });
    await queryInterface.addConstraint('cfp_filieres', { fields: ['hero_img_id'], type: 'foreign key', name: 'cfp_filieres_hero_img_id_fk', references: { table: 'cfp_files', field: 'id' }, onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    await queryInterface.addConstraint('cfp_services', { fields: ['hero_img_id'], type: 'foreign key', name: 'cfp_services_hero_img_id_fk', references: { table: 'cfp_files', field: 'id' }, onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    await queryInterface.addConstraint('cfp_articles', { fields: ['filiere_id'], type: 'foreign key', name: 'cfp_articles_filiere_id_fk', references: { table: 'cfp_filieres', field: 'id' }, onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    await queryInterface.addConstraint('cfp_articles', { fields: ['service_id'], type: 'foreign key', name: 'cfp_articles_service_id_fk', references: { table: 'cfp_services', field: 'id' }, onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    await queryInterface.addConstraint('cfp_articles', { fields: ['author_id'], type: 'foreign key', name: 'cfp_articles_author_id_fk', references: { table: 'cfp_users', field: 'id' }, onUpdate: 'CASCADE' });
    await queryInterface.addConstraint('cfp_articles', { fields: ['hero_image_id'], type: 'foreign key', name: 'cfp_articles_hero_image_id_fk', references: { table: 'cfp_files', field: 'id' }, onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    await queryInterface.addConstraint('cfp_article_files', { fields: ['article_id', 'file_id'], type: 'unique', name: 'cfp_article_files_article_file_unique' });
    await queryInterface.addConstraint('cfp_article_files', { fields: ['article_id'], type: 'foreign key', name: 'cfp_article_files_article_id_fk', references: { table: 'cfp_articles', field: 'id' }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    await queryInterface.addConstraint('cfp_article_files', { fields: ['file_id'], type: 'foreign key', name: 'cfp_article_files_file_id_fk', references: { table: 'cfp_files', field: 'id' }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  }
  async down(queryInterface) {
    for (const table of ['cfp_article_files', 'cfp_articles', 'cfp_services', 'cfp_filieres', 'cfp_files', 'cfp_users']) await queryInterface.dropTable(table);
  }
}

export default new CreateCfpTables();
