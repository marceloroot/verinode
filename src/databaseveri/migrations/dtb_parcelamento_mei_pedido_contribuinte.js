'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('dtb_parcelamento_mei_pedido_contribuinte', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            cnpj: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            numero: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            data_pedido: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            situacao: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            data_situacao: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            valor_total_consolidado: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            qtd_parcelas: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            parcela_basica: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            data_consolidacao: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            path_download_parcela: {
                type: Sequelize.STRING(500),
                allowNull: true,
            },
        
        });

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('dtb_parcelamento_mei_pedido_contribuinte');
    }
};
