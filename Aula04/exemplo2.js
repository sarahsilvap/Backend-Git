class usuário {
    constructor () {
        this.nome = null;
        this.login = null;
        this.senha = null;
        this.cpf = null;
        this.celular = null;
    }

    exibirInfo() {
        console.log(`Nome do usuário: ${this.nome}`);
        console.log(`Login: ${this.login}`);
        console.log(`Senha do usuário: ${this.senha}`);
        console.log(`CPF do usuário: ${this.cpf}`);
        console.log(`Celular do usuário: ${this.celular}`);

    }

    verificaLogin (user, senha) {
        if ((user == this.login) && (senha == this.senha)) {
            console.log(`Login correto! Bem-vindo ${this.nome}`);
        } else {
            console.log(`Login incorreto. Tente novamente.`)
        }
    }
}

const usuario1 = new usuário();
usuario1.nome = 'Sarah Pereira';
usuario1.login = 'sarahspereira';
usuario1.senha = '7240';
usuario1.cpf = '42037285841';
usuario1.celular = '19983262158';
usuario1.exibirInfo();
usuario1.verificaLogin('sarahspereira', '7240');