const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variável global para armazenar a instância do Cliente
let cliente;

function perguntas() {
    console.log('\nCADASTRO DE CLIENTE');

    rl.question('Digite seu nome: ', (nome) => {
        rl.question('Digite sua profissão: ', (profissao) => {
            rl.question('Digite o saldo inicial: ', (saldo) => {
                // Após obter todas as respostas, criar o cliente
                cliente = new Cliente(nome, profissao, parseFloat(saldo));
                cliente.extrato();  // Exemplo de uso do cliente
                mostrarMenu();
            });
        });
    });
}

function mostrarMenu() {
    console.log('\nEscolha uma opção:');
    console.log('1. Realizar um pix');
    console.log('2. Realizar um empréstimo');
    console.log('3. Realizar um saque');
    console.log('4. Sair');

    rl.question('\nDigite o número da opção desejada: ', (resposta) => {
        switch (resposta) {
            case '1':
                realizarPix();
                break;
            case '2':
                realizarEmprestimo();
                break;
            case '3':
                realizarSaque();
                break;
            case '4':
                console.log('Saindo...');
                rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                mostrarMenu(); // Mostra o menu novamente em caso de opção inválida
                break;
        }
    });
}

function realizarPix() {
    rl.question('Digite o valor do pix: ', (valor) => {
        cliente.pix(parseFloat(valor));
        cliente.extrato();  // Mostrar o extrato atualizado
        mostrarMenu();      // Voltar ao menu
    });
}

function realizarEmprestimo() {
    rl.question('Digite o valor do empréstimo: ', (valor) => {
        cliente.emprestimo(parseFloat(valor));
        cliente.extrato();  // Mostrar o extrato atualizado
        mostrarMenu();      // Voltar ao menu
    });
}

function realizarSaque() {
    rl.question('Digite o valor do saque: ', (valor) => {
        cliente.saque(parseFloat(valor));
        cliente.extrato();  // Mostrar o extrato atualizado
        mostrarMenu();      // Voltar ao menu
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
            console.log("Não é possível realizar um pix com este valor.");
        } else if (valor > this.saldo) {
            console.log(`Não é possível realizar o Pix. Seu saldo é de apenas R$${this.saldo}.`);
        } else {
            this.saldo -= valor;
            console.log(`Pix de R$${valor} realizado com sucesso.`);
        }
    }

    emprestimo(valor) {
        if (valor <= 0) {
            console.log("O valor do empréstimo deve ser positivo.");
        } else {
            console.log(`Empréstimo realizado no valor de R$${valor}.`);
            this.saldo += valor;  // O saldo é aumentado com o valor do empréstimo
        }
    }

    saque(valor) {
        if (valor <= 0) {
            console.log("Valor do saque deve ser positivo.");
        } else if (this.saldo < valor) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        }
    }

    extrato() {
        console.log(`Extrato de ${this.nome}: R$${this.saldo}`);
    }
}

perguntas();
