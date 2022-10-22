'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Viagem.hasOne(models.Price);
      Viagem.hasOne(models.Localization);
    }
  }
  Viagem.init({
    status: DataTypes.INTEGER,
    codLocalizacao: DataTypes.INTEGER,
    codMotorista: DataTypes.INTEGER,
    codCliente: DataTypes.INTEGER,
    codPreco: DataTypes.INTEGER,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Viagem',
  });
  return Viagem;
};
