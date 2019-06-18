'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    paid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    cemetaryId:{
      type: DataTypes.INTEGER,
      references:{
        model: 'Cemetaries',
        key: 'id'
      }
    },
    userId:{
      type: DataTypes.INTEGER,
      references:{
        model: 'Users',
        key: 'id'
      }
    },
    deceasedId:{
      type: DataTypes.INTEGER,
      references:{
        model: 'Deceaseds',
        key: 'id'
      }
    }
  }, {
    timestamps: true
  });
  Reservation.associate = function(models) {
  };
  return Reservation;
};