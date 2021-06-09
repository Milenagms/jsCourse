const express = require('express');
const app = express();  // as duas linhas são para carregar o express para dentro do arquivo

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET     PUT    DELETE  para criar uma api utiliza isso.

// http: //meusite.com/ <- GET -> Entregue a página /
// http: //meusite.com/ <- GET -> Entregue a página /sobre
// http: //meusite.com/ <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

app.listen(3000, () => {  // aqui é para o servidor ficar observando e quando chegar alguma aqui terá resposta
    console.log('Servidor executando na porta 3000');
});
