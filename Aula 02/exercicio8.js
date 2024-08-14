const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// pergunta o primeiro e segungo valor
rl.question('Digite o valor da base do triângulo: ', (base) => {
    rl.question('Digite a altura do triângulo: ', (altura) => {
        
        const areaTriangulo = base * altura / 2;

        console.log(`A área do triângulo é: ${areaTriangulo}`);
        rl.close();
    });
});