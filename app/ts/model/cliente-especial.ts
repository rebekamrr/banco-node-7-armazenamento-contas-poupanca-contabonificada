class ClienteEspecial extends Cliente{
    private clienteEspecial: Array<Cliente>;

    constructor(nome:string, cpf:string, ) {
        // @ts-ignore
        super (nome, cpf);
        this.clienteEspecial= new Array<Cliente>();
    }


}