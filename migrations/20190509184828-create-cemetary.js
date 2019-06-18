'use strict';
const models = require("../models");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(models.Cemetary.tableName,
      models.Cemetary.tableAttributes);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cemetaries');
  }
};