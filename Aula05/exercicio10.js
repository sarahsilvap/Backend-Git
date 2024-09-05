const livro = {
    titulo: 'A Seleção',
    autor: 'Kiera Cass',
    anoPublicacao: 2012,
    genero: 'Romance',
    avaliacao: '5 estrelas',
    idadePublicacao: function() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoPublicacao;
    }
};

console.log(livro)
console.log(`Idade de Publicação: ${livro['idadePublicacao']()} anos`);

delete livro.avaliacao;

console.log(livro); 

