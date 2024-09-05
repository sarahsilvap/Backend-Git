const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

livro.avaliacao = null;

function solicitarAvaliacao(){
    if (livro.avaliacao === null) {
        console.log('\nAVALIE ESTE LIVRO!')
        rl.question('Digite sua avaliação (estrelas de 1 - 5): ', (entrada) => {
            const avaliacao = entrada;

            if (avaliacao >= 0 && avaliacao <= 5) {
                livro.avaliacao = avaliacao;
                console.log(`Sua avaliação foi de: ${livro.avaliacao} estrelas.`)
            } else {
                console.log('Avaliação inválida. Digite um número entre 1 e 5.');
            }
        })
    } else {
        console.log ('Esse livro já foi avaliado.');
    }
}

console.log('DETALHES DO LIVRO:');
console.log(`\nTítulo: ${livro['titulo']}`);
console.log(`Autor: ${livro['autor']}`);
console.log(`Ano de Publicação: ${livro['anoPublicacao']}`);
console.log(`Gênero: ${livro['genero']}`);
console.log(`Idade de Publicação: ${livro['idadePublicacao']()} anos`);
solicitarAvaliacao();




