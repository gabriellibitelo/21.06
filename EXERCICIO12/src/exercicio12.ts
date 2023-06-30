//Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital.
// Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. 
//Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos,
// realizados pelo cliente.EX
//Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos. 
//Dessa forma, a sua tarefa é criar uma função que receba este `array` como parâmetro, atualize o saldo,
// total descontando todos os débitos e retorne apenas os clientes com saldo negativo.

let users = [
	{ clientes: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ clientes: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ clientes: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ clientes: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ clientes: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ clientes: "Soter", saldoTotal: 1200, debitos: [] }
]

type clients = {
    clientes: string,
    saldoTotal: number,
    debitos: number[],
}

function getNegativeAmount(users: clients[]): clients[]{
    calculaDebts();
    
    return users.filter(clients =>{
        return clients.saldoTotal <0;

    })
}

function calculaDebts() {
    return users.map(user => {
         const sumDebts = user.debitos.reduce((acumulator: number, value: number) => 
            value ? acumulator += value : 0 
            , 0);
             user.saldoTotal -= sumDebts;
             user.debitos = [];
         });
}
console.log(getNegativeAmount(users));