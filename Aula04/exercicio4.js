const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntas() {
    console.log('CADASTRO DE CLIENTE');

    rl.question('Digite seu nome: ', (nome) => {
        rl.question('Digite sua profissão: ', (profissao) => {
            rl.question('Digite o saldo inicial: ', (saldo) => {
                // Após obter todas as respostas, criar o cliente
                const cliente = new Cliente(nome, profissao, parseFloat(saldo));
                cliente.extrato();  // Exemplo de uso do cliente
                rl.close();  // Fechar a interface readline
            });
        });
    });
}

class Cliente {
    constructor(nome, profissao, saldo) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldo;
    }

    pix(valor) {
        if (valor <= 0) {
            console.log("Não é possível realizar um pix com este valor");
        } if (valor > this.saldo) {
            console.log(`Não é possível realizar o Pix. Seu saldo é de apenas R$${this.saldo}`);
        } if( valor < this.saldo) {
            console.log(`Pix de R$${valor} realizado com sucesso.`);
        }
    }

    emprestimo(valor) {
        if (valor <= 0) {
            console.log("O valor do empréstimo deve ser positivo.");
        } else {
            console.log(`Empréstimo realizado no valor de R$${valor}`);
        }
    }

    saque(valor) {
        if (valor <= 0) {
            console.log("Valor do saque deve ser positivo.");
        } if (this.saldo < valor) {
            console.log("Saldo insuficiente para realizar o saque.");
        } if (this.saldo >= valor){
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        }
    }

    extrato() {
        console.log(`Extrato de ${this.nome}: R$${this.saldo}`);
    }
}

perguntas();
