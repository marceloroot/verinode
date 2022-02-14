
const { Model, DataTypes } = require('sequelize');

class dtb_situacao_fiscal extends Model {
  static init(sequelize) {
    super.init({
      cnpj_data: DataTypes.STRING,
      caminho_download: DataTypes.STRING,
      possui_pendencia: DataTypes.BOOLEAN,
      data_pdf: DataTypes.BLOB,
      data_execucao: DataTypes.DATE,
     
    }, {
      sequelize
    });
  };

  static associate(models){
   
    this.belongsTo(models.dtb_empresas,{ foreignKey: 'cnpj_data', targetKey: 'cnpj', as:'empresas' })
   }


}

module.exports = dtb_situacao_fiscal;


