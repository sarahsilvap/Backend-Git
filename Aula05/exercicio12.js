const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES"
}

pessoa.cpf = '12345678941'
pessoa.seguroSocial = '123456789'
   
function formatoExibicao() {
    const cpf4Digitos = pessoa.cpf.slice(0, 4);
    const seguroSocial4Digitos = pessoa.seguroSocial.slice(0,4)
    console.log(`Os 4 primeiros dígitos do CPF de ${pessoa.nome} é: ${cpf4Digitos}`);
    console.log(`Os 4 primeiros dígitos do Seguro Social de ${pessoa.nome} é: ${seguroSocial4Digitos}`);
}

console.log('DETALHES DO USUÁRIO:');
console.log(`\nNome: ${pessoa['nome']}`);
console.log(`Data de nascimento: ${pessoa['dataNascimento']}`);
console.log(`Carteira de identidade: ${pessoa['carteiraIdentidade']}`);
console.log(`E-mail: ${pessoa['email']}`);
console.log(`Telefone: ${pessoa['idadePtelefoneublicacao']}`);
console.log(`Cidade: ${pessoa['cidade']}`);
console.log(`Estado: ${pessoa['estado']}`);
formatoExibicao();