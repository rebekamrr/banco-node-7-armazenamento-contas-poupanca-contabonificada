class Cliente {
    private _nome: string;
    private _cpf: string;

    constructor( nome: string, cpf: string ) {
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    //get conta() {
    //  return this._conta;
    //}

    //set conta(conta) {
    //  this._conta = conta;
    //}
    toString(): string {
        return `Nome: ${this.nome} - Cpf: ${this.cpf}`
    }
}