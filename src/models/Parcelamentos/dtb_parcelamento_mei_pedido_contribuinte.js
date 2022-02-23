
const { Model, DataTypes } = require('sequelize');

class dtb_parcelamento_mei_pedido_contribuinte extends Model {
  static init(sequelize) {
    super.init({
      cnpj:DataTypes.STRING,
      numero:DataTypes.STRING,
      data_pedido:DataTypes.STRING,
      situacao:DataTypes.STRING,
      data_situacao:DataTypes.STRING,
      valor_total_consolidado:DataTypes.STRING,
      qtd_parcelas:DataTypes.STRING,
      parcela_basica:DataTypes.STRING,
      data_consolidacao:DataTypes.STRING,

    }, {
      sequelize
    });
  };
  static associate(models){
   
    this.belongsTo(models.dtb_empresas,{ foreignKey: 'cnpj', targetKey: 'cnpj', as:'empresas' });
    this.hasMany(models.dtb_mei_parcelas_emitidas,{ foreignKey: 'cnpj', targetKey: 'cnpj', as:'parcelas' })
   }


}

module.exports = dtb_parcelamento_mei_pedido_contribuinte;


