'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dtb_parcelamento_pgfn', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      cnpj: {
          type: Sequelize.STRING(200),
          allowNull: true,
      },
      vinculacao: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      negociacao: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      modalidade: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      numero_conta: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      situacao_conta: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      data_adesao: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      valor_consolidado: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
     

   });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dtb_parcelamento_pgfn');
  }
};
