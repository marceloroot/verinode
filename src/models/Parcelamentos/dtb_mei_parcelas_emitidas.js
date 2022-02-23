
const { Model, DataTypes } = require('sequelize');

class dtb_mei_parcelas_emitidas extends Model {
  static init(sequelize) {
    super.init({
      cnpj:DataTypes.STRING,
      valor:DataTypes.STRING,
      data_parcela:DataTypes.STRING,
      pago:DataTypes.BOOLEAN,
      path_download_parcela:DataTypes.STRING,
    }, {
      sequelize
    });
  };
  
  static associate(models){
        this.belongsTo(models.dtb_parcelamento_mei_pedido_contribuinte,{ foreignKey: 'cnpj', targetKey: 'cnpj', as:'contribuinte' })
       
   }
}

module.exports = dtb_mei_parcelas_emitidas;

