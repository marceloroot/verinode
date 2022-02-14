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
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            data_situacao: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            qtd_parcelas: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            parcela_basica: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            data_consolidacao: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
        
        });

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('dtb_parcelamento_mei_pedido_contribuinte');
    }
};
