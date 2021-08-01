class Clientes {
    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
        const c1 = new Cliente('ana', '111.111.111-01');
        const c2 = new Cliente('João', '111.111.111-02');
        this.clientes.push(c1, c2)

    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

    inserir(cli: Cliente): void {
        this.clientes.push(cli);
    }

    pesquisar(cpf: string) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }

    remover(cpf: string): void {
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