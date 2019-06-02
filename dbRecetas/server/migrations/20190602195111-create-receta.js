'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('receta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaPreinscripcion: {
        type: Sequelize.STRING
      },
      farmaco: {
        type: Sequelize.STRING
      },
      posologia: {
        type: Sequelize.STRING
      },
      doctor: {
        type: Sequelize.STRING
      },
      duracionTratamient: {
        type: Sequelize.STRING
      },
      unidad: {
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
    return queryInterface.dropTable('receta');
  }
};