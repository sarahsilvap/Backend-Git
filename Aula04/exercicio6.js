class Produtos {
    constructor() {
        this.nome = null;
        this.preco = null;
        this.tipoComunicacao = null;
        this.consumoEnergia = null;
    }

    exibirInfo(){
        console.log(`Nome: ${this.nome}\nPreço: R$${this.preco.toFixed(2)}\nTipo de Comunicação: ${this.tipoComunicacao}\nConsumo de Energia: ${this.consumoEnergia} kWh`)
    }
} 

class Fritadeira extends Produtos {
    constructor() {
        super();
        this.ligaDesliga = null;
    }

    ligar() {
        this.ligaDesliga = true;
        console.log(`${this.nome} está ligada.`);
    }

    desligar() {
        this.ligaDesliga = false;
        console.log(`${this.nome} está desligada.`);
    }
}

class Televisao extends Produtos {
    constructor() {
        super();
        this.ligaDesliga = null;
        this.volume = 10;
    }

    ligar() {
        this.ligaDesliga = true;
        console.log(`${this.nome} está ligada.`);
    }

    desligar() {
        this.ligaDesliga = false;
        console.log(`${this.nome} está desligada.`);
    }

    ajustarVolume(novoVolume){
        this.volume = novoVolume;
        console.log(`Volume da ${this.nome} ajustado para ${this.volume}.`);
    }
}

class arCondicionado extends Produtos {
    constructor() {
        super();
        this.ligaDesliga = null;
        this.ajustaTemp = 22;
    }

    ligar() {
        this.ligaDesliga = true;
        console.log(`${this.nome} está ligada.`);
    }

    desligar() {
        this.ligaDesliga = false;
        console.log(`${this.nome} está desligada.`);
    }

    ajustarTemp(novaTemp){
        this.ajustaTemp = novaTemp;
        console.log(`Temperatura do ${this.nome} ajustado para ${this.ajustaTemp} ºC.`);
    }
}

let fritadeira = new Fritadeira;
fritadeira.nome = 'Fritadeira';
fritadeira.preco = 150;
fritadeira.tipoComunicacao = 'Bluetooth';
fritadeira.consumoEnergia = 1.5;

fritadeira.exibirInfo();
fritadeira.ligar();

let TV = new Televisao;
TV.nome = 'TV Samsung';
TV.preco = 3500;
TV.tipoComunicacao = 'Wi-Fi';
TV.consumoEnergia = 30.45;

TV.exibirInfo();
TV.ligar();
TV.ajustarVolume(50);

let Ar_Condicionado = new arCondicionado;
Ar_Condicionado.nome = 'Ar Samsung';
Ar_Condicionado.preco = 2600;
Ar_Condicionado.tipoComunicacao = 'Wi-Fi';
Ar_Condicionado.consumoEnergia = 17.1;

Ar_Condicionado.exibirInfo();
Ar_Condicionado.ligar();
Ar_Condicionado.ajustarTemp(18);

