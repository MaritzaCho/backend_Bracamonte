'use strict';
module.exports = (sequelize, DataTypes) => {
  const orden = sequelize.define('orden', {
    fecha: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    userpacienteId: DataTypes.INTEGER
  }, {});
  orden.associate = function(models) {
    // associations can be defined here
  };
  return orden;
};