
const { Model, DataTypes } = require('sequelize');

class dtb_empresas extends Model {
  static init(sequelize) {
    super.init({
      inscricao_estadual:DataTypes.STRING,
      cnpj:DataTypes.STRING,
      inscricao_estadual_completo:DataTypes.STRING,
      cnpj_completo:DataTypes.STRING,
      razao_social:DataTypes.STRING,
      nome_fantasia:DataTypes.STRING,
      mei:DataTypes.STRING,
      natureza_juridica:DataTypes.STRING,
      unidade_atendimento	:DataTypes.STRING,
      cep	:DataTypes.STRING,
      logradouro:DataTypes.STRING,
      numero:DataTypes.STRING,
      complemento	:DataTypes.STRING,
      bairro:DataTypes.STRING,
      cidade:DataTypes.STRING,
      uf:DataTypes.STRING,
      referencia	:DataTypes.STRING,
      localizacao	:DataTypes.STRING,
      telefone	:DataTypes.STRING,
      email	:DataTypes.STRING,
      telefone_alternativo:DataTypes.STRING,
      celular_alternativo:DataTypes.STRING,
      email_alternativo:DataTypes.STRING,
      situacao_cadastral:DataTypes.STRING,
      situacao:DataTypes.STRING,
      motivo:DataTypes.STRING,
      situacao_dte:DataTypes.STRING,
      situacao_conta_dte:DataTypes.STRING,
      senha_sefaz:DataTypes.STRING,
      atividade_principal:DataTypes.STRING,
      condicao:DataTypes.STRING,
      forma_pagamento:DataTypes.STRING,
      motivo_situacao_cadastral:DataTypes.STRING,
      crc_contador:DataTypes.STRING,
      nome_contador:DataTypes.STRING,
      crc_responsavel:DataTypes.STRING,
      nome_responsavel:DataTypes.STRING,
      sync:DataTypes.BOOLEAN,
      id_contador:DataTypes.BIGINT(20),
      vinculo_contador:DataTypes.BOOLEAN,
      data_cadastro:DataTypes.DATE,
      data_cadastro:DataTypes.DATE,
      login_sefaz:DataTypes.STRING,
      login_mei:DataTypes.STRING,
      senha_mei:DataTypes.STRING,
      id_funcionario:DataTypes.STRING,
      flag_empresa_sem_ie:DataTypes.STRING,
      situacao_cadastral_vigente:DataTypes.STRING,
      motivo_intimacao:DataTypes.STRING,
      data_intimacao:DataTypes.STRING,
      nire:DataTypes.STRING,
      anotacoes:DataTypes.STRING,
      cpf_alvara:DataTypes.STRING,
      inscricao_municipal:DataTypes.STRING,
      inscricao_imobiliaria:DataTypes.STRING,
      tipo_regime:DataTypes.STRING,
 

    }, {
      sequelize
    });
  };
  
  static associate(models){
   
   
   }

}

module.exports = dtb_empresas;
