
const { Model, DataTypes } = require('sequelize');

class dtb_parcelamento_mei_consolidacao_original extends Model {
  static init(sequelize) {
    super.init({
      id_parcelamento:DataTypes.STRING,
      cnpj:DataTypes.STRING,
      periodo_apurcao:DataTypes.STRING,
      vencimento:DataTypes.STRING,
      numero_processo:DataTypes.STRING,
      saldo_devedor_original:DataTypes.STRING,
      valor_atualizado:DataTypes.STRING,

    }, {
      sequelize
    });
  };
  

}

module.exports = dtb_parcelamento_mei_consolidacao_original;
