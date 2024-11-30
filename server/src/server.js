const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { initDataBase } = require('./config/database');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initDataBase();

app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na port : ${process.env.PORT}`)
})