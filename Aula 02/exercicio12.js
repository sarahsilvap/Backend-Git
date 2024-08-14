const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// pergunta o primeiro e segungo valor
rl.question('Digite o valor de litros abastecidos: ', (litros) => {
        
        const totalGasto = litros * 5.5;

        console.log(`O valor gasto para abastecer o carro foi de: ${totalGasto}`);
        rl.close();
});

