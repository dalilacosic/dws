'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deceased = sequelize.define('Deceased', {
    firstname: DataTypes.STRING(30),
    lastname: DataTypes.STRING(30),
    birthdate: {
      type: DataTypes.DATEONLY,
      notNull: true,
      notEmpty: true,
    },
    deathdate: {
      type: DataTypes.DATEONLY,
      notNull: true,
      notEmpty: true,
    }
  }, {
    timestamps: true
  });
  Deceased.associate = function(models) {
    Deceased.belongsTo(models.Cemetary)
  };
  return Deceased;
};