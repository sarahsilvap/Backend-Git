const calculadora = {
    soma: function(a, b){
        return a + b;
    },
    subtracao: function(a, b){
        return b - a;
    },
    multiplicacao: function(a, b){
        return a * b;
    },
    divisao: function(a, b) {
        if (b === 0) {
            return 'Não é possível fazer divisão por 0.'; 
        } else {
            return a / b;
        }
    }
}

calculadora.calcularMedia = function(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma / array.length;
};

console.log(calculadora.soma(3, 5));
console.log(calculadora.subtracao(3, 5));
console.log(calculadora.multiplicacao(3, 5));
console.log(calculadora.divisao(3, 0));
console.log(calculadora.divisao(22, 2));

const valores = [8, 4, 7, 6, 5, 9];
const media = calculadora.calcularMedia(valores);
console.log('O resultado da média é:', media);