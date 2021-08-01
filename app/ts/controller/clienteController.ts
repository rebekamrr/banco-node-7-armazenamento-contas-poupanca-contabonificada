class ClienteController{

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;

    private clientes: Clientes;

    constructor(){
        this.inputNome =
            <HTMLInputElement>document.querySelector ( '#Nome');
        this.inputCpf =
            <HTMLInputElement>document.querySelector ('#CPF');
        this.clientes= new Clientes();
        //const c1= new Cliente ( 'ana', '111.111.111-01')
        //this.clientes.inserir(c1);
    }


    inserir(evento: Event) {
        //chamar o onclick no html
        evento.preventDefault();
        let novoCliente= new Cliente (this.inputNome.value,
            this.inputCpf.value
            );

        this.clientes.inserir(novoCliente);
        this.inserirClienteNOHTML(novoCliente);
    }


    listar() {
        this.clientes.listar().forEach(cliente=> this.inserirClienteNOHTML (cliente));
    }


    private inserirClienteNOHTML (cliente: Cliente){
        const elementoP = document.createElement( 'p');
        elementoP.textContent = cliente.toString(); //precisa fazer o tosrting em cliente
        const botao= document.createElement ('button');
        botao.textContent= 'X';
        //tratar clicl botão
        botao.addEventListener('click',(evente: MouseEvent) => {
            this.clientes.remover(cliente.cpf);
            (<Element>evente.target).parentElement.remove();
        });

        elementoP.appendChild(botao);
        document.body.appendChild(elementoP);
    }

}


