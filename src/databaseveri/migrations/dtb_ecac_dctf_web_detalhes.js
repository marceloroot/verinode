'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('dtb_ecac_dctf_web_detalhes', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            id_declaracao: {
                type: Sequelize.STRING(11),
                allowNull: true,
            },
            nivel: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            tributo: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            pa_debito: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            debito_apurado: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            credito_vinculado: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            saldo_a_pagar: {
                type: Sequelize.STRING(255),
                allowNull: true,
            }
        });

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('dtb_ecac_dctf_web_detalhes');
    }
};
