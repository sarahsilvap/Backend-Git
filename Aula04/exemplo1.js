class Casa {
    constructor() {
        this.cor = null;
        this.qtdDeComodos = null;
    }

    exibeinfo() {
        console.log(`A cor da casa é ${this.cor} e tem ${this.qtdDeComodos} cômodos.`);

    }

    abrirJanelas(qtde) {
        console.log(`Abrir ${qtde} janela(s)`);
    }
    
    fecharJanelas(qtde) {
        if (qtde == 2) {
            console.log('Todas as janelas estão fechadas')
        } if (qtde > 2) {
            console.log(`Não existem ${qtde} janelas a serem fechadas`)
        } else {
            console.log(`Fechada ${qtde} janela(s)`)
        }
    }
    
    abrirPortas() {
        console.log('Portas abertas');
    }
    
    fecharPortas() {
        console.log('Portas fechadas');
    }
}

/* function main(){
    let minhaCasa = new Casa(); // cria um objeto chamado minhaCasa
    minhaCasa.cor = 'Azul';
    minhaCasa.qtdDeComodos = 3;
    minhaCasa.exibeinfo(minhaCasa.cor, minhaCasa.qtdDeComodos); //Usa-se deste modo se no 'exeibeinfo()' estivesse: 'exibeinfo(cor, qtdDeComocos)'.
}

main(); */

const casaDois = new Casa();
casaDois.cor = 'Vermelha';
casaDois.qtdDeComodos = 5;
casaDois.exibeinfo();
casaDois.abrirJanelas(1);
casaDois.abrirPortas();
casaDois.abrirJanelas(2);
casaDois.fecharJanelas(2);
