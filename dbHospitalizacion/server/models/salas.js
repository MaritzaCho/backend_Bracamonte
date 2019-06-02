'use strict';
module.exports = (sequelize, DataTypes) => {
  const salas = sequelize.define('salas', {
    nameSala: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    cantMaxCamas: DataTypes.INTEGER
  }, {});
  salas.associate = function(models) {
    // associations can be defined here
    salas.hasMany(models.camas, {
      foreignkey: 'salasId',
    });
  };
  return salas;
};