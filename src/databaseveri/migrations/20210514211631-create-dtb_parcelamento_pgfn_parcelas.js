'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dtb_parcelamento_pgfn_parcelas', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      id_parcelamento: {
          type: Sequelize.STRING(20),
          allowNull: true,
      },
      nr_prestacao: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      valor_originario: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      valor_sd_devedor: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      data_vencimento_prestacao: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      data_vencimento_doc_arrec: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      nr_documento_cobranca: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      path_download_parcela: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
     

   });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dtb_parcelamento_pgfn_parcelas');
  }
};
