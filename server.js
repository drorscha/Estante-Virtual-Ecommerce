// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Configurar o body-parser para lidar com JSON
app.use(bodyParser.json());

// Definir uma rota de exemplo
app.get('/', (req, res) => {
    res.send('Bem-vindo a nova lojinha de pedidos!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
