'use strict';
module.exports = (sequelize, DataTypes) => {
  const camas = sequelize.define('camas', {
    numCamas: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    salaId: DataTypes.INTEGER
  }, {});
  camas.associate = function(models) {
    // associations can be defined here
    camas.hasMany(models.hospitalizacion, {
      foreignkey: 'camasId',
    });

    camas.belongsT(models.salas, {
      foreignkey: 'salasId',
      onDelete: 'CASCADE'
    })
  };
  return camas;
};