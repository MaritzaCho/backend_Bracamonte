'use strict';
module.exports = (sequelize, DataTypes) => {
  const historiales = sequelize.define('historiales', {
    antecedentesP: DataTypes.STRING,
    userpacienteId: DataTypes.INTEGER
  }, {});
  historiales.associate = (models)=> {
    // associations can be defined here
    historiales.hasMany(models.responsable,{
      foreignKey:'historialesId',
    });
    historiales.belongsTo(models.userpacienteId,{
      foreinkey:'userpacienteId',
      onDelete:'CASCADE'
    });
  };
  return historiales;
};