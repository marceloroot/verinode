'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dtb_parcelamento_pgfn_dados_negociacao', { 
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
      negociacao: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      nr_referencia_conta: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      modalidade: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      data_da_adesao: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      contribuinte: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      total_de_parcelas: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      valor_consolidado: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      saldo_devedor_sem_juros: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      nr_recibo: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
     

   });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dtb_parcelamento_pgfn_dados_negociacao');
  }
};
