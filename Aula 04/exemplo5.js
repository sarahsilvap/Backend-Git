class animal {
    constructor(nome, idade) {
        this.nome;
        this.idade;
    }

    fazerSom() {
        console.log(`${this.nome} faz um som.`);
    }
}

//extends gerança, a classe cachorro herda da classe animal algumas caracteríticas como nome e idade
class cachorro extends animal {
    constructor() {
        //chama o construtor da classe base
        super();
        this.raca = null;
    }

    // Método sobrescrito
    fazerSom() {
        console.log(`${this.nome} late.`);
    }
    // Método adicional
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Raça: ${this.raca}`);
    }
}

const Jerry = new cachorro();
Jerry.nome = 'Jerry';
Jerry.idade = '7';
Jerry.raca = 'Pinscher';
Jerry.exibirInfo();
Jerry.fazerSom;