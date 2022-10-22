'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Localizacaos', {
      codigo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitudeOrigem: {
        type: Sequelize.STRING
      },
      longitudeOrigem: {
        type: Sequelize.STRING
      },
      latitudeDestino: {
        type: Sequelize.STRING
      },
      longitudeDestino: {
        type: Sequelize.STRING
      },
      distancia: {
        type: Sequelize.FLOAT
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Localizacaos');
  }
};
