'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atividades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Atividades.belongsTo(models.Usuario);
    }
  }
  Atividades.init({
    codMotorista: DataTypes.INTEGER,
    UsuarioId: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    data: DataTypes.DATE,
    ViagemId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Atividades',
  });
  return Atividades;
};