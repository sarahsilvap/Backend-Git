const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    year: {type: Number}
})

//exportanto o modelo paa salvar os livros

modulo.exports = mongoose.model('Book', bookSchema);