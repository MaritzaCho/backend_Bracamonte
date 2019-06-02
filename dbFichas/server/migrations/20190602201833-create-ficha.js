'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fichas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      turno: {
        type: Sequelize.STRING
      },
      doctor: {
        type: Sequelize.STRING
      },
      servicio: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.INTEGER
      },
      costo: {
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
    return queryInterface.dropTable('fichas');
  }
};