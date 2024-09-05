// cria um objeto chamado pessoa
let pessoa={
    nome: 'Daniel',
    idade: 29,
    profissao: 'Engenheiro Eletrônico',
    saudacao: function(){
        console.log("Olá ! Seja bem vindo !");

    }
}
pessoa.time ="Corinthians"

console.log(pessoa)
console.log(pessoa.saudacao())
console.log(pessoa.idade) // acessa uma informação específica do objeto pessoa

