'use strict';
const models = require("../models");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(models.Users.tableName, models.Users.tableAttributes);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};