class Carro {
    constructor () {
        this.marca = null;
        this.modelo = null;
        this.ano = null;
        this.motorLigado = false;
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

    exibirInfo () {
        console.log(`A marca do carro é: ${this.marca}, o modelo do carro é: ${this.modelo} e o ano do carro é: ${this.ano}`)
    }
}

const Corsa = new Carro();
Corsa.marca = 'Chevrolet';
Corsa.modelo = 'Corsa Classic';
Corsa.ano = '2004';
Corsa.desligarMotor();
Corsa.statusMotor();
Corsa.exibirInfo();