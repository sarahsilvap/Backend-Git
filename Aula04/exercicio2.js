// Classe base Pessoa
class Pessoa {
    constructor() {
        this.nome = null;
        this.idade = null;
        this.profissao = null;
        this.salario = null;
        this.empresa = null;
    }

    exibeInfo() {
        console.log(`O nome do colaborador é: ${this.nome}, a idade é: ${this.idade}, e a profissão é: ${this.profissao}`);
    }
}

class Profissao extends Pessoa {
    constructor() {
        super(); 
        this.empresa = null;
        this.salario = null;
    }

    exibeTrabalho() {
        console.log(`O colaborador trabalha na empresa ${this.empresa} e recebe ${this.salario} reais`);
    }
}

let colaborador1 = new Profissao();
colaborador1.nome = 'João';
colaborador1.idade = 30;
colaborador1.profissao = 'Desenvolvedor';
colaborador1.salario = 4500;
colaborador1.empresa = 'Villares';

colaborador1.exibeInfo(); 
colaborador1.exibeTrabalho(); 
