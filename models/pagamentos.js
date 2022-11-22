'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pagamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pagamentos.belongsTo(models.Viagem);
      Pagamentos.hasOne(models.Preco);
    }
  }
  Pagamentos.init({
    codMotorista: DataTypes.INTEGER,
    UsuarioId: DataTypes.INTEGER,
    PrecoId: DataTypes.INTEGER,
    data: DataTypes.DATE,
    status: DataTypes.INTEGER,
    formadepagamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pagamentos',
  });
  return Pagamentos;
};