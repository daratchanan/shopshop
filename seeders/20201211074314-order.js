'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        date: '01-12-2020',
        total_price: '74990',
        delivery_date: '10-12-2020',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '3'
      },
      {
        date: '02-12-2020',
        total_price: '48990',
        delivery_date: '11-12-2020',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '4'
      },
      {
        date: '03-12-2020',
        total_price: '38990',
        delivery_date: '12-12-2020',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '5'
      },
      {
        date: '04-12-2020',
        total_price: '69990',
        delivery_date: '13-12-2020',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '1'
      },
      {
        date: '05-12-2020',
        total_price: '33290',
        delivery_date: '14-12-2020',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '2'
      },
      {
        date: '06-12-2020',
        total_price: '24600',
        delivery_date: '15-12-2020',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '4'
      },
      {
        date: '07-12-2020',
        total_price: '39000',
        delivery_date: '16-12-2020',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '3'
      },
      {
        date: '08-12-2020',
        total_price: '18300',
        delivery_date: '17-12-2020',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: '1'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
