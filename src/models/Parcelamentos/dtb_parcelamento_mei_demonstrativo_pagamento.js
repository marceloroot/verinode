
const { Model, DataTypes } = require('sequelize');

class dtb_parcelamento_mei_demonstrativo_pagamento extends Model {
  static init(sequelize) {
    super.init({
      id_parcelamento:DataTypes.STRING,
      cnpj:DataTypes.STRING,
      mes_parcela:DataTypes.STRING,
      vencimento_das:DataTypes.STRING,
      data_arrecadacao:DataTypes.STRING,
      valor_pago:DataTypes.STRING,

    }, {
      sequelize
    });
  };
  

}

module.exports = dtb_parcelamento_mei_demonstrativo_pagamento;
