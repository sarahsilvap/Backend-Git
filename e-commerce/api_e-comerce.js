const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000; // Use a porta correta para Replit

app.use(cors());
app.use(bodyParser.json());

let produtos = [];
let clientes = [];

// Rota principal
app.get("/", (req, res) => {
    res.send("Bem vindo a Api - Senai Market v 1.0");
});

// Rota de produtos
app.post("/produtos", (req, res) => {
    const { nome, qtde, valor } = req.body;
    const produto = { nome, qtde, valor };
    produtos.push(produto);
    res.status(201).json(produto);
});

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

// Rota de clientes
app.post("/clientes", (req, res) => {
    const { login, senha } = req.body;
    const cliente = { login, senha };
    clientes.push(cliente);
    res.status(201).json(cliente);
});

app.get("/clientes", (req, res) => {
    res.json(clientes);
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
