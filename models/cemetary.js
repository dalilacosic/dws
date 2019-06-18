'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cemetary = sequelize.define('Cemetary', {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    full: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    timestamps: true
  });
  Cemetary.associate = function(models) {
  };
  return Cemetary;
};