const mysql = require('mysql2');

const initDataBase = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '447353',
        database: 'taskflow-db'
    });

    connection.connect((err) => {
        if(err) {
            console.error('Erro ao conectar ao banco de dados: ', err)
            process.exit(1);
        }
        console.log('Conexão com o banco de dados estabelecida');
    });

    global.db = connection
};

module.exports = { initDataBase };