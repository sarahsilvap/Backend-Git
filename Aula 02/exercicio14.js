const nota1 = 10;
const nota2 = 7;
const nota3 = 0;
const media = (nota1 + nota2 + nota3) / 3

if (media >= 6) {
    console.log('Parabéns! Você foi aprovado!')
} if (media >= 4 && media < 6) {
    console.log('Você ficou de recuperação')
} else {
    console.log('Você foi reprovado.')
}