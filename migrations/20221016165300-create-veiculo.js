'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigoUser: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      documento: {
        type: Sequelize.INTEGER
      },
      modelo: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      porte: {
        type: Sequelize.STRING
      },
      pesoMax: {
        type: Sequelize.FLOAT
      },
      ano: {
        type: Sequelize.INTEGER
      },
      placa: {
        type: Sequelize.STRING
      },
      tipo: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Veiculos');
  }
};
