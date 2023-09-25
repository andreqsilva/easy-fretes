'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasOne(models.Veiculo);
      Usuario.hasMany(models.Viagem);
      Usuario.hasMany(models.Pagamentos);
      Usuario.hasMany(models.Itens);
      Usuario.hasMany(models.Arquivos);
    }
  }
  Usuario.init({
    num_doc: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    avaliacao: DataTypes.INTEGER,
    tipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};
