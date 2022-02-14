
const { Model, DataTypes } = require('sequelize');

class dtb_parcelamento_mei_pedido_contribuinte extends Model {
  static init(sequelize) {
    super.init({
      id_parcelamento:DataTypes.STRING,
      cnpj:DataTypes.STRING,
      numero:DataTypes.STRING,
      data_pedido:DataTypes.STRING,
      situacao:DataTypes.STRING,
      data_situacao:DataTypes.STRING,
      qtd_parcelas:DataTypes.STRING,
      parcela_basica:DataTypes.STRING,
      data_consolidacao:DataTypes.STRING,

    }, {
      sequelize
    });
  };
  

}

module.exports = dtb_parcelamento_mei_pedido_contribuinte;


