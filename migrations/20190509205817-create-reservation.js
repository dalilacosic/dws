'use strict';
const models = require("../models");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(models.Reservation.tableName,
      models.Reservation.tableAttributes);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reservations');
  }
};