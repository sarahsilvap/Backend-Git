//criando as rotas
const express = require('express') // importa o express para criar o servidor
const Book = require('./models/book.js') // importa o modelo dos livros book
const router = express.Router(); // cria o elemnto para rotear com base as nossas 

// **** CRIAÇÃO (POST) ****
// o async é porque a requisição tem um certo tempo para retornar
router.post('/', async (req, res) => {
    const { title, author, year } = req.body; // extrai os dados da requisição
    try {
        const newBook = new Book ({ title, author, year });
        await newBook.save();
        res.status(201).json(newBok);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar livro', error });
    }
});

// **** LEITURA GET ****
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livro', error });
    }
});

// **** ATUALIZAÇÃO (PUT) ****
router.put('/:id', async (req, res) => {
    const { title, author, year } = req.body;
    try {
        const updateBook = await Book.findByIdAndUpdate(req.params.id, { title, author, year }, { new: true });
        res.status(200).json(updateBook);
    } catch (error) {
        res.status(500).json ({ message: 'Erro ao atualizar livro', error});
    }
});

// **** EXCLUSÃO (DELETE) ****
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Livro deletado com sucesso'});
    } catch (error) {
        res.status(200).json({ message: 'Erro ao deletar livro', error })
    }
});

module.exports = router;