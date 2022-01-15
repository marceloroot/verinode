
const { Model, DataTypes } = require('sequelize');

class dtb_parcelamento_pgfn extends Model {
  static init(sequelize) {
    super.init({
      cnpj:DataTypes.STRING,
      vinculacao:DataTypes.STRING,
      negociacao:DataTypes.STRING,
      modalidade:DataTypes.STRING,
      numero_conta:DataTypes.STRING,
      situacao_conta:DataTypes.STRING,
      data_adesao:DataTypes.STRING,
      valor_consolidado:DataTypes.STRING,
      
    }, {
      sequelize
    });
  };
  static associate(models){
    this.hasMany(models.dtb_parcelamento_pgfn_parcelas,{ foreignKey: 'id_parcelamento', as:'parcelas' })
    this.hasMany(models.dtb_parcelamento_pgfn_dados_negociacao,{ foreignKey: 'id_parcelamento', as:'negocio' })
    this.belongsTo(models.dtb_empresas,{ foreignKey: 'cnpj', as:'empresa' })
   }

}

module.exports = dtb_parcelamento_pgfn;
