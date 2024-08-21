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
            console.log(`Login correto! Bem-vindo ${user}`);
        } else {
            console.log(`Login incorreto. Tente novamente.`)
        }
    }
}