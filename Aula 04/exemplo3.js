class Fruta {
    // Criar construtor
    constructor(sabor, nome, cor, peso, diasdesdecolheita) {
        this.sabor = sabor;
        this.nome = nome;
        this.cor = cor;
        this.peso = peso;
        this.diasdesdecolheita = diasdesdecolheita;
        this.isMadura = null; // O atributo pode ser opcional, inicializado como null
    }

    // Criar método para verificar se a fruta está madura
    madura() {
        if (this.diasdesdecolheita >= this.diasParaMadura) {
            console.log(`A ${this.nome} está madura`);
        } else {
            console.log(`A ${this.nome} não está madura`);
        }
    }
}

// Exemplo de uso
const fruta = new Fruta('Doce', 'Manga', 'Amarela', 0.5, 7);
fruta.madura(10); // Espera-se que "A Manga está madura" seja impresso