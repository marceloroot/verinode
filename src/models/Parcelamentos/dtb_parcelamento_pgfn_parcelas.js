
const { Model, DataTypes } = require('sequelize');

class dtb_parcelamento_pgfn_parcelas extends Model {
  static init(sequelize) {
    super.init({
      id_parcelamento:DataTypes.STRING,
      nr_prestacao:DataTypes.STRING,
      valor_originario:DataTypes.STRING,
      valor_sd_devedor:DataTypes.STRING,
      data_vencimento_prestacao:DataTypes.STRING,
      data_vencimento_doc_arrec:DataTypes.STRING,
      nr_documento_cobranca:DataTypes.STRING,
      status:DataTypes.STRING,
      path_download_parcela:DataTypes.STRING,
      
    }, {
      sequelize
    });
  };
  
  static associate(models){
    this.belongsTo(models.dtb_parcelamento_pgfn,{ foreignKey: 'id_parcelamento', as:'pgfn' })
   }
}

module.exports = dtb_parcelamento_pgfn_parcelas;
