// db.js
const mysql = require('mysql2');

// Configurar a conexão com o MySQL
const connection = mysql.createConnection({
    host: 'localhost', // Endereço do banco de dados
    user: 'root', // Nome de usuário (padrão do XAMPP)
    password: '', // Senha (geralmente vazia por padrão)
    database: 'lojinha', //Nome do banco de dados
});

// Conectar ao banco de dados
connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    } else {
        console.log('Conexão bem-sucedida ao banco de dados');
    }
});

// Exportar a conexão para ser usada em outras partes do aplicativo
module.exports = connection;
