let contaController = new ContaController();
let clienteeController = new ClienteController();
contaController.listar();
clienteeController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const clientes:Clientes = new Clientes();
//Inserir cliente
const c2 = new Cliente('Igor', '111.111.111-04');
clientes.inserir(c2);
//Listar cliente
clientes.listar().forEach(cliente => console.log(cliente.toString()));
//pesquisar
clientes.pesquisar('111.111.111-02')
//remover cliente
clientes.remover('111.111.111-01');
clientes.listar().forEach(cliente => console.log('Lista atualizada após remoção:' + cliente.toString()));
clientes.pesquisar('111.111.111-02')