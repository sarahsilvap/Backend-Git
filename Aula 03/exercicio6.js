let saldo = 1000;     
let deposito = 200;   
let saque = 150;      
let operacao;         

operacao = "deposito"; 
if (operacao === "deposito") {
    saldo += deposito; 
}

operacao = "saque"; 
if (operacao === "saque") {
    saldo -= saque; 
}

console.log("Saldo final: R$ " + saldo);