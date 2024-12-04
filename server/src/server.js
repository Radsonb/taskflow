const express = require('express');
const routes = require('./routes');
require('dotenv').config();
const { connectDB } = require('./config/db');

var app = express();
app.use(express.json())

connectDB();

const port = process.env.PORT || 5050;

app.use('/api', routes);

app.use((err, req, res, next) => {
    console.error('Erro interno:', err);
    res.status(500).json({
      message: 'Erro interno do servidor. Por favor, tente novamente mais tarde.'
    });
  });

app.listen(port, (err) => {
    if(err) {
        console.error('Erro ao iniciar o servidor:', err);
        process.exit(1);        
    } else {
        console.log(`Server started on port ${port}`);
        
    }
})