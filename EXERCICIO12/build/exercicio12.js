"use strict";
let users = [
    { clientes: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { clientes: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { clientes: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { clientes: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { clientes: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { clientes: "Soter", saldoTotal: 1200, debitos: [] }
];
function getNegativeAmount(users) {
    calculaDebts();
    return users.filter(clients => {
        return clients.saldoTotal < 0;
    });
}
function calculaDebts() {
    return users.map(user => {
        const sumDebts = user.debitos.reduce((acumulator, value) => value ? acumulator += value : 0, 0);
        user.saldoTotal -= sumDebts;
        user.debitos = [];
    });
}
console.log(getNegativeAmount(users));
//# sourceMappingURL=exercicio12.js.map