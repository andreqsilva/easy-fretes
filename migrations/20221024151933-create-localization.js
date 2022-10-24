'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Localizations', {
      id: {
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
      enderecoOrigem: {
        type: Sequelize.STRING
      },
      enderecoDestino: {
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
    await queryInterface.dropTable('Localizations');
  }
};