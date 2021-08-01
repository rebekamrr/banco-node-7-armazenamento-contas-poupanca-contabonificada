class ClienteEspecial extends Cliente {
    constructor(nome, cpf) {
        // @ts-ignore
        super(nome, cpf);
        this.clienteEspecial = new Array();
    }
}
