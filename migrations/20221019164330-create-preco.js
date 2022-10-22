'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Precos', {
      codigo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codLocalizacao: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Localizacoes',
          key: 'codigo'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      valor: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Precos');
  }
};
