const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

// Inicialização do app
const app = express();
app.use(cors());
app.use(express.json());

// Conexão ao MongoDB
mongoose.connect('mongodb+srv://sarahspereira17:<db_password>@library.rrmdm.mongodb.net/', {
    userNewUrlParser: true,
    userUnifiedTolology: true,
})
.then(() => console.lof('mongoDB conectado'))
.catch(err => console.error('Error ao conectar ao MongoDB', err));

// Importação das rotas

const bookRoutes = require('./routes/books');
app.User('./api/books', booksRoutes);

// Definir a porta do servidos
app;AudioListener(3000, () => {
    console.log('Seridor rodando na porta 3000');
});