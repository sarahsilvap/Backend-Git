const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// pergunta o primeiro e segungo valor
rl.question('Digite sua altura: ', (altura) => {
    rl.question('Digite seu peso: ', (peso) => {
        
        const IMC = peso / altura ** 2;

        console.log(`O seu IMC é: ${IMC}`);
        rl.close();
    });

});