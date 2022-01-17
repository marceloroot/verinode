
const { Model, DataTypes } = require('sequelize');

class dtb_ecac_dctf_web_detalhes extends Model {
  static init(sequelize) {
    super.init({
      id_declaracao: DataTypes.STRING,
      nivel: DataTypes.STRING,
      tributo: DataTypes.STRING,
      pa_debito: DataTypes.STRING,
      debito_apurado: DataTypes.STRING,
      credito_vinculado: DataTypes.STRING,
      saldo_a_pagar: DataTypes.STRING,
    }, {
      sequelize
    });
  };

  static associate(models) {
    this.belongsTo(models.dtb_ecac_dctf_web, { foreignKey: 'id_declaracao', as: 'dctf_web' })
  }
}

module.exports = dtb_ecac_dctf_web_detalhes;
