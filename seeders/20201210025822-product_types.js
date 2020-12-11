'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_types', [
      {
        name: 'Televesions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerators',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Air Conditioners',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fans',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Washing Machines',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Irons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Computers/Laptops',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Smartphones',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_types', null, {});
  }
};
