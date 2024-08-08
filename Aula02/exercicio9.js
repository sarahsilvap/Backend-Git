const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// pergunta o primeiro e seungo valor
rl.question('Digite o valor do raio do círculo: ', (raio) => {
    
    const areaCirculo = Math.PI * raio ** 2;

    console.log(`A área do triângulo é: ${areaCirculo}`);
    rl.close();
});