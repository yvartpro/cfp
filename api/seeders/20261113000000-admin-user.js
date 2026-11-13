'use strict';

const bcrypt = require('bcrypt');

const ADMIN_EMAIL = 'admin@giraso.bi';

module.exports = {
  async up(queryInterface) {
    const [existing] = await queryInterface.sequelize.query(
      'SELECT id FROM cfp_users WHERE email = ? LIMIT 1',
      { replacements: [ADMIN_EMAIL] },
    );
    if (existing.length) return;
    const now = new Date();
    await queryInterface.bulkInsert('cfp_users', [{
      name: 'admin',
      email: ADMIN_EMAIL,
      role: 'admin',
      is_active: true,
      password: await bcrypt.hash('password', 10),
      createdAt: now,
      updatedAt: now,
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('cfp_users', { email: ADMIN_EMAIL });
  },
};
