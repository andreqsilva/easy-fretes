'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Travels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      codLocalizacao: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Localizations',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      codMotorista: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      codCliente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      codPreco: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Prices',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      data: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Travels');
  }
};
