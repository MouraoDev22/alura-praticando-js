// Você está criando um sistema para controlar os gastos mensais da sua casa. Os valores das despesas estão em um array, e você precisa somar todos esses valores para saber o total gasto no mês.

// Escreva um programa que:

// . Crie um array com os valores das despesas.
// . Use um loop for para somar os valores.
// . Exiba o total gasto.

const despesas = [
    {nome: 'Aluguel', valor: 1200},
    {nome: 'Luz', valor: 200},
    {nome: 'Água', valor: 150},
    {nome: 'Internet', valor: 100},
    {nome: 'Supermercado', valor: 800},
    {nome: 'Transporte', valor: 300},
    {nome: 'Lazer', valor: 400}
];

const totalDespesas = calcularDespesas(despesas);
console.log(`\nTotal de despesas: R$ ${totalDespesas.toFixed(2)}\n`);

function calcularDespesas(despesas) {
    let total = 0;
    for (let i = 0; i < despesas.length; i++) {
        total += despesas[i].valor;
    };
    return total;
};