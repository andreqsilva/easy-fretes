'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Travel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Travel.hasOne(models.Localization);
      Travel.hasOne(models.Price);
    }
  }
  Travel.init({
    status: DataTypes.INTEGER,
    codLocalizacao: DataTypes.INTEGER,
    codMotorista: DataTypes.INTEGER,
    codCliente: DataTypes.INTEGER,
    codPreco: DataTypes.INTEGER,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Travel',
  });
  return Travel;
};
