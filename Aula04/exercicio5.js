class Maquinas {
    constructor() {
        this.nome = null;
        this.qtdEixos = null;
        this.rpm = null;
        this.consumoEnergia = null;
    }

    exibirInfo(){
        console.log(`Nome: ${this.nome}\nPreço: R$${this.preco.toFixed(2)}\nConsumo de Energia: ${this.consumoEnergia} kWh`)
    }
} 

class Furadeira extends Maquinas {
    constructor() {
        super();
        this.ligaDesliga = null;
        this.velocidadeRotacao
    }

    ligar() {
        this.ligaDesliga = true;
        console.log(`${this.nome} está ligada.`);
    }

    desligar() {
        this.ligaDesliga = false;
        console.log(`${this.nome} está desligada.`);
    }

    ajustarVelocidade(novaVelocidade){
        this.velocidadeRotacao = novaVelocidade;
        console.log(`Velocidade da ${this.nome} ajustado para ${this.velocidadeRotacao}.`);
    }
}

let furadeira3M = new Furadeira;
furadeira3M.nome = 'Furadeira';
furadeira3M.preco = 150;
furadeira3M.rpm = 3000;
furadeira3M.consumoEnergia = 1.5;

furadeira3M.exibirInfo();
furadeira3M.ligar();
furadeira3M.ajustarVelocidade(3);


