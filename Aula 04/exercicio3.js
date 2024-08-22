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

class carro extends Automovel {
    constructor() {
        
    }
}

const Corsa = new Carro('Prata', 'Corsa Classic', 'Flex', 4, 'Chevrolet', '2004');
Corsa.ligarMotor();
Corsa.abrirVidro();
Corsa.statusMotor();
Corsa.statusVidro();
Corsa.exibirInfo();

const moto = new Moto('Vermelha', 'CB 500', 'Gasolina', 2);
moto.ligarMotor();
moto.abrirVidro(); 
moto.statusMotor();
moto.statusVidro(); 
moto.exibirInfo();

const caminhao = new Caminhao('Azul', 'Scania R', 'Diesel', 6, '30 toneladas');
caminhao.ligarMotor();
caminhao.abrirVidro(); 
caminhao.statusMotor();
caminhao.statusVidro(); 
caminhao.exibirInfo();