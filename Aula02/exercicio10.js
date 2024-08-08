const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// pergunta o primeiro e segungo valor
rl.question('Digite o valor da tensão do circuito: ', (tensao) => {
    rl.question('Digite o valro da corrente do circuito: ', (corrente) => {
        
        const resistencia = tensao / corrente;

        console.log(`A resistência desse circuito em Ohms é: ${resistencia}`);
        rl.close();
    });
});