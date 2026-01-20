// Você está desenvolvendo uma funcionalidade para um aplicativo de finanças pessoais. Um dos recursos permite simular quanto uma pessoa economizaria em um período de tempo, iniciando em R$1 no primeiro dia e aumentando esse valor em R$1 a cada novo dia. Ou seja, a cada dia que passa, ela economiza R$1 a mais do que no anterior.

// Por exemplo, em 10 dias ela economizaria:

// Dia 1: R$1
// Dia 2: R$3
// Dia 3: R$6
// ...
// Dia 10: R$55

//Crie um programa que calcule o total economizado ao final de 10 dias.

let saldoInicial = Number(prompt("Digite o seu saldo: "));
saldoInicial = verificarEntrada(saldoInicial);

const valorEconomizadoPorDia = 1;
const numeroDeDias = 10;

const saldoFinal = calcularSaldoFinal(saldoInicial, valorEconomizadoPorDia, numeroDeDias);
const valorEconomizado = saldoFinal - saldoInicial;

console.log(`Saldo inicial: R$${saldoInicial.toFixed(2)}`);
console.log(`Saldo final: R$${saldoFinal.toFixed(2)}`);
console.log(`Valor economizado: R$${valorEconomizado.toFixed(2)} em ${numeroDeDias} dias.`);

function verificarEntrada(saldoInicial) {
    while (isNaN(saldoInicial) || saldoInicial <= 0) {
        saldoInicial = Number(prompt("Entrada inválida. Por favor, digite um valor válido: "));
    }
    return saldoInicial;
}

function calcularSaldoFinal(saldoInicial, valorEconomizadoPorDia, numeroDeDias) {
    for (let i = 1; i <= numeroDeDias; i++) {
        saldoInicial += valorEconomizadoPorDia * i;
    }
    return saldoInicial;
}