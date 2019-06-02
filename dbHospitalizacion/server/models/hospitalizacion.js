'use strict';
module.exports = (sequelize, DataTypes) => {
  const hospitalizacion = sequelize.define('hospitalizacion', {
    motivoInter: DataTypes.STRING,
    fecha: DataTypes.STRING,
    camaId: DataTypes.INTEGER
  }, {});
  hospitalizacion.associate = function(models) {
    // associations can be defined here
    hospitalizacion.belongsTo(models.camas, {
      foreignkey: 'camasId',
      onDelete: 'CASCADE'
    });
  };
  return hospitalizacion;
};