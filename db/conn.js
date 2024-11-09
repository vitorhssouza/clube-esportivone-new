const mysql = require('mysql2');                        //Importando a biblioteca mysql2          
const {Sequelize} = require('sequelize');               //Importando o sequelize
//const senha = require('../oculto/senha');               //Importando o arquivo senha
//const senha = ''; 

const sequelize = new Sequelize('novo_clube', 'pic', '', {host: '127.0.0.1', dialect: 'mysql'});

try {
    sequelize.authenticate();
    console.log('Banco de Dados Conectado com Sucesso');
} catch (error) {
    console.log('Error ao conectar com o DB' + error)
}

module.exports = sequelize;
