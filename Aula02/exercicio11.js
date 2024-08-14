const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// pergunta o primeiro e segungo valor
rl.question('Digite o valor do seu salário: ', (salario) => {
        
        const salarioLiquido = salario - (salario * 0.2);

        console.log(`O seu salário líquido é: ${salarioLiquido}`);
        rl.close();
});

