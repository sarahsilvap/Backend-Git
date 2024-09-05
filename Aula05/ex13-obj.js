// cria um objeto
let carro={
    nome: 'Jeep',
    cor: 'Vermelho',
    ano: 2022,
    velocidade: function(){
        return this.nome +' 150 km/h'
    }
}
console.log(carro)
console.log(carro.velocidade())

class carro1{
    nome = 'Jeep';
    ano = 2024;
    cor = 'Azul';

}
Hilux = new carro1()
console.log(Hilux)