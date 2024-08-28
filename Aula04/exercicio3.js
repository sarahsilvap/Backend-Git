class Automovel {
    constructor () {
        this.cor = null;
        this.modelo = null;
        this.tipoCombustivel = null;
        this.qtdRodas = null;
        this.motorLigado = false;
        this.vidroAberto = false;
    }

    ligarMotor () {
        this.motorLigado = true;
    }
    
    desligarMotor() {
        this.motorLigado = false;
    }

    statusMotor () {
        if (this.motorLigado == true) {
            console.log('O motor está ligado.');
        } else {
            console.log('O motor está desligado.')
        }
    }

    abrirVidro () {
        this.vidroAberto = true;
    }
    
    fecharVidro() {
        this.vidroAberto = false;
    }

    statusVidro () {
        if (this.vidroAberto == true) {
            console.log('O vidro está aberto.');
        } else {
            console.log('O vidro está fechado.')
        }
    }

    exibirInfo() {
        console.log(`Cor: ${this.cor}, Modelo: ${this.modelo}, Tipo de Combustível: ${this.tipoCombustivel}, Quantidade de Rodas: ${this.qtdRodas}`);
    }
}

class Carro extends Automovel {
    constructor() {
        super();
        this.fabricante = null;
        this.ano = null;
    }

    exibirDados(){
        console.log(`O carro é do fabricante ${this.fabricante} e do ano ${this.ano}`)
    }
}

class Moto extends Automovel {
    constructor() {
        super();
        this.cilindrada = null;
    }

    exibirDados() {
        console.log(`A moto tem uma cilindrada de ${this.cilindrada}cc`);
    }
}

class Caminhao extends Automovel {
    constructor() {
        super(); 
        this.capacidadeCarga = null;
    }

    exibirDados() {
        console.log(`O caminhão tem uma capacidade de carga de ${this.capacidadeCarga} kg`);
    }
}

let Corsa = new Carro();
Corsa.cor = 'Prata';
Corsa.modelo = 'Classic';
Corsa.tipoCombustivel = 'Gasolina';
Corsa.qtdRodas = 4;
Corsa.fabricante = 'Chevrolet';
Corsa.ano = 2004;

Corsa.ligarMotor();
Corsa.abrirVidro();
Corsa.statusMotor();
Corsa.statusVidro();
Corsa.exibirInfo();
Corsa.exibirDados();


let ninja = new Moto();
ninja.cor = 'Verde';
ninja.modelo = 'Ninja ZX-6R';
ninja.tipoCombustivel = 'Gasolina';
ninja.qtdRodas = 2;
ninja.cilindrada = 636;

ninja.ligarMotor();
ninja.fecharVidro(); // Moto não tem vidro, método só para demonstração
ninja.statusMotor();
ninja.statusVidro(); 
ninja.exibirInfo();
ninja.exibirDados();

let scania = new Caminhao();
scania.cor = 'Azul';
scania.modelo = 'R 500';
scania.tipoCombustivel = 'Diesel';
scania.qtdRodas = 8;
scania.capacidadeCarga = 20000;

scania.ligarMotor();
scania.fecharVidro(); 
scania.statusMotor();
scania.statusVidro(); 
scania.exibirInfo();
scania.exibirDados();