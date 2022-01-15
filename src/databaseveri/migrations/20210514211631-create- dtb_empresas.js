'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dtb_empresas', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      inscricao_estadual: {
          type: Sequelize.STRING(20),
          allowNull: true,
      },
      cnpj : {
        type: Sequelize.STRING(25),
        allowNull: true,
      },
      inscricao_estadual_completo: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      cnpj_completo: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      razao_social: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      nome_fantasia: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      mei: {
        type: Sequelize.STRING(4),
        allowNull: true,
      },
      natureza_juridica: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      unidade_atendimento: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      unidade_fiscalizacao: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      cep: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      logradouro: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      numero: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      complemento: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      bairro: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      cidade: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      uf: {
        type: Sequelize.STRING(2),
        allowNull: true,
      },
      referencia: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      localizacao: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      telefone: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      telefone_alternativo: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      celular_alternativo: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      email_alternativo: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      situacao_cadastral: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      situacao  : {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      motivo: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      situacao_dte: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      situacao_conta_dte: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      senha_sefaz: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      atividade_principal: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      condicao: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      forma_pagamento: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      motivo_situacao_cadastral: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      crc_contador: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      nome_contador: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      crc_responsavel: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      nome_responsavel: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      sync: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      id_contador: {
        type: Sequelize.BIGINT(20),
        allowNull: true,
      },
      vinculo_contador: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      data_cadastro: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      data_atualizacao: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      login_sefaz: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      login_mei: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      senha_mei: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      id_funcionario: {
        type: Sequelize.BIGINT(20),
        allowNull: true,
      },
      flag_empresa_sem_ie: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      situacao_cadastral_vigente: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      motivo_intimacao: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      data_intimacao: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
  
      nire: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
  
      anotacoes: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
  
      cpf_alvara: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
  
      inscricao_municipal: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      inscricao_imobiliaria: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      tipo_regime: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
  
     

   });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dtb_empresas');
  }
};
