'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    firstname: {
      type: DataTypes.STRING(30),
      validate: {
        isAlpha: true
      }
    },
    lastname: {
      type: DataTypes.STRING(30),
      validate: {
        isAlpha: true
      }
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
      is: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    },
    password: {
      type: DataTypes.STRING,
      notNull: true,
      notEmpty: true,
    },
    role:{
      type: DataTypes.ENUM,
      values:[ 'user','administrator'],
      allowNull: false,
      defaultValue: 'user'
    }
  }, {
    timestamps: true
  });
  User.associate = function(models) {
  };
  return User;
};