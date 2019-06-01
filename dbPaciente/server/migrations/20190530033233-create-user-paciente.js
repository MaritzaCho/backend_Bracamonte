'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userPacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numHistorial: {
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apPaterno: {
        type: Sequelize.STRING
      },
      apMaterno: {
        type: Sequelize.STRING
      },
      ci: {
        type: Sequelize.STRING
      },
      fechNacimiento: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
      },
      estadoCivil: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      zona: {
        type: Sequelize.STRING
      },
      telef: {
        type: Sequelize.INTEGER
      },
      ocupacion: {
        type: Sequelize.STRING
      },
      idiomas: {
        type: Sequelize.STRING
      },
      lugranacimiento: {
        type: Sequelize.STRING
      },
      departameto: {
        type: Sequelize.STRING
      },
      provincia: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userPacientes');
  }
};