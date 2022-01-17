'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dtb_ecac_dctf_web', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      cnpj: {
          type: Sequelize.STRING(255),
          allowNull: true,
      },
      id_declaracao: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      id_controle: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      periodo_apuracao: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      data_transmissao: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      categoria: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      origem: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      tipo: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      situacao: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      debito_apurado: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      saldo_a_pagar: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      path_download_darf: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      path_download_recibo: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      path_download_extrato: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
     

   });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dtb_ecac_dctf_web');
  }
};
