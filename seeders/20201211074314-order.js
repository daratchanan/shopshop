'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  //   return queryInterface.bulkInsert('orders', [
  //     {
  //       date: new Date('01-12-2020'),
  //       total_price: '50000',
  //       delivery_date: new Date('10-12-2020'),
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //       user_id: '3'
  //     },
  //     {
  //       date: new Date('02-12-2020'),
  //       total_price: '35000',
  //       delivery_date: new Date('11-12-2020'),
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //       user_id: '4'
  //     },
  //     {
  //       date: new Date('03-12-2020'),
  //       total_price: '25000',
  //       delivery_date: new Date('12-12-2020'),
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //       user_id: '5'
  //     },
  //     {
  //       date: new Date('04-12-2020'),
  //       total_price: '1200',
  //       delivery_date: new Date('13-12-2020'),
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //       user_id: '1'
  //     },
  //     {
  //       date: new Date('05-12-2020'),
  //       total_price: '25000',
  //       delivery_date: new Date('14-12-2020'),
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //       user_id: '2'
  //     },
  //   ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
