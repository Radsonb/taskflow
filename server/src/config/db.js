require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const connectDB = () => {
    db.connect((err) => {
        if(err) {
            console.error('Erro ao tentar conectar com o banco de dados: ', err);
            process.exit(1);
        } else {
            console.log('Conectado ao banco de dados');
            
        }
    }) ;
};

const checkConnection = () => {
    db.ping((err) => {
        if(err) {
            console.error('Erro ao verificar a conexão com o banco de dados: ', err);
        } else {
            console.log('Conexão com o banco de dados está ativa');
            
        }
    }) 
};

module.exports = {
    db,
    connectDB,
    checkConnection
}