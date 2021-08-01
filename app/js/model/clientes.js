class Clientes {
    constructor() {
        this.clientes = new Array();
        const c1 = new Cliente('ana', '111.111.111-01');
        const c2 = new Cliente('João', '111.111.111-02');
        this.clientes.push(c1, c2);
    }
    listar() {
        return this.clientes;
    }
    inserir(cli) {
        this.clientes.push(cli);
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    remover(cpf) {
        //apenas debita se houver saldo
        //verifico dentro do array se existe laguem com o cpf, se existir remove
        const removerCliente = this.pesquisar(cpf);
        if (removerCliente) {
            const indice = this.clientes.indexOf(removerCliente);
            if (indice > -1) {
                this.clientes.splice(indice, 1); //deleteCount
            }
        }
    }
}
