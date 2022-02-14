'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('dtb_parcelamento_mei_demonstrativo_pagamento', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            id_parcelamento: {
                type: Sequelize.STRING(11),
                allowNull: true,
            },
            cnpj: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            mes_parcela: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            vencimento_das: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            data_arrecadacao: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            valor_pago: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
          
          
        });

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('dtb_parcelamento_mei_demonstrativo_pagamento');
    }
};
