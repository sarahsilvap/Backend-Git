const livro = {
    titulo: 'A Seleção',
    autor: 'Kiera Cass',
    anoPublicacao: 2012,
    genero: 'Romance',
    idadePublicacao: function() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoPublicacao;
    }
};

console.log('Detalhes do Livro:');
console.log(`Título: ${livro['titulo']}`);
console.log(`Autor: ${livro['autor']}`);
console.log(`Ano de Publicação: ${livro['anoPublicacao']}`);
console.log(`Gênero: ${livro['genero']}`);
console.log(`Idade de Publicação: ${livro['idadePublicacao']()} anos`);
