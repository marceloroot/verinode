
const { Model, DataTypes } = require('sequelize');

class dtb_parcelamento_pgfn_dados_negociacao extends Model {
  static init(sequelize) {
    super.init({
      id_parcelamento:DataTypes.STRING,
      negociacao:DataTypes.STRING,
      nr_referencia_conta:DataTypes.STRING,
      modalidade:DataTypes.STRING,
      data_da_adesao:DataTypes.STRING,
      contribuinte:DataTypes.STRING,
      total_de_parcelas:DataTypes.STRING,
      valor_consolidado:DataTypes.STRING,
      saldo_devedor_sem_juros	:DataTypes.STRING,
      nr_recibo	:DataTypes.STRING,

    }, {
      sequelize
    });
  };
  static associate(models){
    this.belongsTo(models.dtb_parcelamento_pgfn,{ foreignKey: 'id_parcelamento', as:'pgfn' })
   }

}

module.exports = dtb_parcelamento_pgfn_dados_negociacao;
