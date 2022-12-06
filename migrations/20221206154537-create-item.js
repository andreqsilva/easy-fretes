'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qtdePequeno: {
        type: Sequelize.INTEGER
      },
      qtdeMedio: {
        type: Sequelize.INTEGER
      },
      qtdeGrande: {
        type: Sequelize.INTEGER
      },
      terceirizada: {
        type: Sequelize.INTEGER
      },
      escada: {
        type: Sequelize.INTEGER
      },
      viagemId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Travels',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    await queryInterface.dropTable('Items');
  }
};
