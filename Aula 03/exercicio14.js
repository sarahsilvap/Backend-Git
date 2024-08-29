function maiorMenor(a, b, c) {
    if (a > b && a > c) {
        console.log('A variável A é a maior. Seu valor: ' + a)
    } else if (b > a && b > c) {
        console.log('A variável B é a maior. Seu valor: ' + b)
    } else if (c > a && c > b) {
        console.log('A variável C é a maior. Seu valor: ' + c)
    } else {
        console.log('Existem duas variáveis maiores iguais')
    }
}

maiorMenor(10, 8, 4);
