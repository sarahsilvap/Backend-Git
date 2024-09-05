const contaBancaria = {
    titular: 'Sarah Pereira',
    saldo: 0,
    depositar: function(deposito) {
        if (deposito > 0) {
            this.saldo = this.saldo + deposito;
            return `Valor depositado: ${deposito}. Seu saldo agora é: ${this.saldo}`
        } else {
            return `Digite um valor válido para depósito.`
        }
    },
    sacar: function(saque) {
        if (saque > 0 && saque <= this.saldo) {
            this.saldo = this.saldo - saque;
            return `Valor sacado: ${saque}. Seu saldo agora é: ${this.saldo}`
        } else if (valor > this.saldo) {
            console.log('Saldo insuficiente.');
        } else {
            console.log('O valor do saque deve ser positivo.');
        }
    }
}

const cliente = {
    nome: 'Sarah',
    conta: contaBancaria
}

function mostrarSaldo(cliente) {
    console.log(`Cliente: ${cliente.nome}`);
    console.log(`Saldo: R$${cliente.conta.saldo}`);
}
  
cliente.conta.depositar(200);
cliente.conta.sacar(50);
  

mostrarSaldo(cliente);