function exibirInfoPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}.`);
    console.log(`Idade: ${pessoa.idade}.`);
    if (pessoa.solteiro === false) {
        console.log(`Estado civíl: casado.`);
        } else {
        console.log('Estado civíl: solteiro.');
    }
    console.log(`Seus hobbies são: ${pessoa.hobbies}.`)
}

const pessoa = {
    nome: 'Vinicius',
    idade: 21,
    solteiro: false,
    hobbies: ['Ler', 'Academia', 'Jogar', 'Correr']
}

exibirInfoPessoa(pessoa);