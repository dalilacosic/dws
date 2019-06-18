'use strict';
const models = require("../models");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(models.Deceased.tableName,
      models.Deceased.tableAttributes);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Deceaseds');
  }
};