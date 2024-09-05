const livro = {
    titulo: 'A seleção',
    autor: 'Kiera Cass',
    anoPublicacao: 2012,
    genero: 'Romance',
    tempoDePublicacao: function(){
        let ano = new Date().getFullYear();
        return `O tempo de publicação é ${ano - this.anoPublicacao} anos.`
    }
}

console.log(livro);
console.log(livro.tempoDePublicacao());