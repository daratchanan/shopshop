'use strict';
require('dotenv').config();
const bcryptjs = require('bcryptjs');
const salt = bcryptjs.genSaltSync(Number(process.env.SALT_ROUND));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstname: 'nat',
        lastname: 'nat',
        email: 'nat@gmail.com',
        password: bcryptjs.hashSync('123456', salt),
        phone_number: '0811234567',
        address: '188 Bangkok',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'pos',
        lastname: 'pos',
        email: 'pos@gmail.com',
        password: bcryptjs.hashSync('123456', salt),
        phone_number: '0811234567',
        address: '189 Bangkok',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'pwan',
        lastname: 'pwan',
        email: 'pwan@gmail.com',
        password: bcryptjs.hashSync('123456', salt),
        phone_number: '0811234567',
        address: '59 Changmai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'baikhaw',
        lastname: 'baikhaw',
        email: 'baikhaw@gmail.com',
        password: bcryptjs.hashSync('123456', salt),
        phone_number: '0811234567',
        address: '58 Changmai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'baifern',
        lastname: 'baifern',
        email: 'baifern@gmail.com',
        password: bcryptjs.hashSync('123456', salt),
        phone_number: '0811234567',
        address: '57 Changmai',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
