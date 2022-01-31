
const { Model, DataTypes } = require('sequelize');

class dtb_ecac_dctf_web extends Model {
  static init(sequelize) {
    super.init({
      cnpj: DataTypes.STRING,
      id_declaracao: DataTypes.STRING,
      id_controle: DataTypes.STRING,
      periodo_apuracao: DataTypes.STRING,
      data_transmissao: DataTypes.STRING,
      categoria: DataTypes.STRING,
      origem: DataTypes.STRING,
      tipo: DataTypes.STRING,
      situacao: DataTypes.STRING,
      debito_apurado: DataTypes.STRING,
      saldo_a_pagar: DataTypes.STRING,
      path_download_darf: DataTypes.STRING,
      path_download_recibo: DataTypes.STRING,
      path_download_extrato: DataTypes.STRING,
    }, {
      sequelize
    });
  };
  static associate(models) {
    this.hasMany(models.dtb_ecac_dctf_web_detalhes, { foreignKey: 'id_declaracao', as: 'dctf_web_detalhes' })
  }

}

module.exports = dtb_ecac_dctf_web;
