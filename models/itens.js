'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Itens.belongsTo(models.Usuario);
    }
  }
  Itens.init({
    codMotorista: DataTypes.INTEGER,
    UsuarioId: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    data: DataTypes.DATE,
    numero: DataTypes.INTEGER,
    tamanho: DataTypes.FLOAT,
    ViagemId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Itens',
  });
  return Itens;
};