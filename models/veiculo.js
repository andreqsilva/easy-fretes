'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Veiculo.belongsTo(models.Usuario);
    }
  }
  Veiculo.init({
    codigoUser: DataTypes.INTEGER,
    documento: DataTypes.INTEGER,
    modelo: DataTypes.STRING,
    marca: DataTypes.STRING,
    porte: DataTypes.STRING,
    pesoMax: DataTypes.FLOAT,
    ano: DataTypes.INTEGER,
    placa: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Veiculo',
  });
  return Veiculo;
};
