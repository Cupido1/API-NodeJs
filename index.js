const express = require('express');
const app = express();

//Requisição à rota raiz '/'
app.get('/', (req, res) => {

    //Enviando uma resposta à requisição à rota raiz
    res.send("Olá Pedro Ivo!")
});

//Indica que a aplicação deve ouvir a porta 3001
app.listen(3001);