'use strict';
module.exports = (sequelize, DataTypes) => {
  const receta = sequelize.define('receta', {
    fechaPreinscripcion: DataTypes.STRING,
    farmaco: DataTypes.STRING,
    posologia: DataTypes.STRING,
    doctor: DataTypes.STRING,
    duracionTratamient: DataTypes.STRING,
    unidad: DataTypes.INTEGER
  }, {});
  receta.associate = function(models) {
    // associations can be defined here
  };
  return receta;
};