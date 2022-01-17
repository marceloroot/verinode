const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Usuario = require('../models/Usuario');
const Permissoe = require('../models/Permissoe');
const Rotas = require('../models/Rotas');





const connection = new Sequelize(dbConfig);


Usuario.init(connection);
Permissoe.init(connection);
Rotas.init(connection);




//associate


Usuario.associate(connection.models);
Permissoe.associate(connection.models);
Rotas.associate(connection.models);
