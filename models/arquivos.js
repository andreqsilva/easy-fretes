'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arquivos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Arquivos.belongsTo(models.Usuario);
    }
  }
  Arquivos.init({
    UsuarioId: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    data: DataTypes.DATE,
    linkarquivo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Arquivos',
  });
  return Arquivos;
};