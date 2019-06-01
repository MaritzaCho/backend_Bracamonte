'use strict';
module.exports = (sequelize, DataTypes) => {
  const userPaciente = sequelize.define('userPaciente', {
    numHistorial: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apPaterno: DataTypes.STRING,
    apMaterno: DataTypes.STRING,
    ci: DataTypes.STRING,
    fechNacimiento: DataTypes.STRING,
    sexo: DataTypes.STRING,
    estadoCivil: DataTypes.STRING,
    direccion: DataTypes.STRING,
    zona: DataTypes.STRING,
    telef: DataTypes.INTEGER,
    ocupacion: DataTypes.STRING,
    idiomas: DataTypes.STRING,
    lugranacimiento: DataTypes.STRING,
    departameto: DataTypes.STRING,
    provincia: DataTypes.STRING,
    municipio: DataTypes.STRING
  }, {});
  userPaciente.associate = (models)=> {
    // associations can be defined here
    userPaciente.hasMany(models.responsable,{
      foreignKey:'userPacienteId',
    });
  };
  return userPaciente;
};