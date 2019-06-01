'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('responsables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      npadre: {
        type: Sequelize.STRING
      },
      apspadre: {
        type: Sequelize.STRING
      },
      nmadre: {
        type: Sequelize.STRING
      },
      apsmadre: {
        type: Sequelize.STRING
      },
      nomrespon: {
        type: Sequelize.STRING
      },
      aperespon: {
        type: Sequelize.STRING
      },
      telefres: {
        type: Sequelize.STRING
      },
      direcres: {
        type: Sequelize.STRING
      },
      userpacienteId: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('responsables');
  }
};