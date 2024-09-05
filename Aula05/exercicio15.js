const pessoa = {
    nome: 'Vinicius',
    idade: 21,
    solteiro: false,
    hobbies: ['Ler', 'Academia', 'Jogar', 'Correr'],
}

pessoa.endereco = {
    rua: 'Av Brasilia',
    numero: 77,
}

function exibirInfoPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}.`);
    console.log(`Idade: ${pessoa.idade}.`);
    if (pessoa.solteiro === false) {
        console.log(`Estado civíl: casado.`);
        } else {
        console.log('Estado civíl: solteiro.');
    }
    console.log(`Seus hobbies são: ${pessoa.hobbies}.`);
    console.log(`Seus endereço é: Rua: ${pessoa.endereco.rua}, Número: ${pessoa.endereco.numero}.`)
}

exibirInfoPessoa(pessoa);