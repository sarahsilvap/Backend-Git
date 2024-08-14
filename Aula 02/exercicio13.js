const horas = 8;
const dias = 25;
const watts = 1750;
const precoPorKwh = 0.75; 

function calculoGasto () {
    const quiloWatts = watts / 1000; 

    gastoTotal = quiloWatts * precoPorKwh * horas * dias;
    console.log(`O gasto total no mês para essa máquina é de: ${gastoTotal} reais.`)
}

calculoGasto()