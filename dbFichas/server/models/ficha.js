'use strict';
module.exports = (sequelize, DataTypes) => {
  const ficha = sequelize.define('ficha', {
    turno: DataTypes.STRING,
    doctor: DataTypes.STRING,
    servicio: DataTypes.STRING,
    hora: DataTypes.INTEGER,
    costo: DataTypes.INTEGER
  }, {});
  ficha.associate = function(models) {
    // associations can be defined here
  };
  return ficha;
};