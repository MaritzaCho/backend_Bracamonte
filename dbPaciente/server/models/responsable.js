'use strict';
module.exports = (sequelize, DataTypes) => {
  const responsable = sequelize.define('responsable', {
    npadre: DataTypes.STRING,
    apspadre: DataTypes.STRING,
    nmadre: DataTypes.STRING,
    apsmadre: DataTypes.STRING,
    nomrespon: DataTypes.STRING,
    aperespon: DataTypes.STRING,
    telefres: DataTypes.STRING,
    direcres: DataTypes.STRING,
    userpacienteId: DataTypes.INTEGER
  }, {});
  responsable.associate = (models)=> {
    // associations can be defined here
    responsable.belongsTo(models.userpacienteId,{
      foreinkey:'userpacienteId',
      onDelete:'CASCADE'
    });

  };
  return responsable;
};