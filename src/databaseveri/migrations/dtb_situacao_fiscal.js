'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('dtb_situacao_fiscal', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            cnpj_data: {
                type: Sequelize.STRING(14),
                allowNull: true,
            },
            caminho_download: {
                type: Sequelize.STRING(300),
                allowNull: true,
            },
            possui_pendencia: {
                type: Sequelize.BOOLEAN                     ,
                allowNull: true,
            },
            data_pdf: {
                type: Sequelize.BLOB('tiny'),
                allowNull: true,
            },
            data_execucao: {
                type: Sequelize.DATE,
                allowNull: true,
            }
        });

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('dtb_situacao_fiscal');
    }
};
