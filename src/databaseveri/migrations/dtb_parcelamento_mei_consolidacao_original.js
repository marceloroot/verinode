'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('dtb_parcelamento_mei_consolidacao_original', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            id_parcelamento: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            cnpj: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            periodo_apurcao: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            vencimento: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            numero_processo: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            saldo_devedor_original: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            valor_atualizado: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
          
        });

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('dtb_parcelamento_mei_consolidacao_original');
    }
};
