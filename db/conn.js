const mysql = require('mysql2');                        //Importando a biblioteca mysql2          
const {Sequelize} = require('sequelize');               //Importando o sequelize
//const senha = require('../oculto/senha');               //Importando o arquivo senha
//const senha = ''; 

/*
const sequelize = new Sequelize('novo_clube', 'pic', '', {host: '127.0.0.1', dialect: 'mysql'});

try {
    sequelize.authenticate();
    console.log('Banco de Dados Conectado com Sucesso');
} catch (error) {
    console.log('Error ao conectar com o DB' + error)
}

module.exports = sequelize;  */


require('dotenv').config();
// const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASS,
  {
    host: DB_HOST,
    dialect: 'mysql',
    port: DB_PORT,
  }
);


sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;

