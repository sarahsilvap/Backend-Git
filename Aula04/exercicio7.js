class Livros {
    constructor() {
        this.nome;
        this.quantidade;
        this.preco;
        this.autor;
        this.edicao;
    }

    exibirInfo(){
        console.log(`Nome: ${this.nome}\nQuantidade: ${this.quantidade}\nPreço: R$${this.preco}\nAutor: ${this.autor}\nEdição: ${this.edicao}`)
    }

    Emprestimo(qtd) {
        if (qtd <= 0 ) {
            console.log(`Não é possível de se emprestar esse livro. Quantidade insuficiente.`)
        } else if (qtd > this.quantidade) {
                console.log(`Não é possível emprestar ${qtd} livros. Quantidade disponível: ${this.quantidade}.`);
        } else {
            this.quantidade -= qtd;
            console.log('Empréstimo realizado!')
        }
    }
}

let Romance = new Livros;
Romance.nome = 'É assim que acaba';
Romance.quantidade = 3;
Romance.preco = 45;
Romance.autor = 'Colleen Hoover';
Romance.edicao = 2;

Romance.exibirInfo();
Romance.Emprestimo(4);
