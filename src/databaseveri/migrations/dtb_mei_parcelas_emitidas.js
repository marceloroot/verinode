'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('dtb_mei_parcelas_emitidas', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            cnpj: {
                type: Sequelize.STRING(500),
                allowNull: true,
            },
            valor: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            data_parcela: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            pago: {
                type: Sequelize.BOOLEAN                     ,
                allowNull: true,
            },
           
        
        });

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('dtb_mei_parcelas_emitidas');
    }
};
