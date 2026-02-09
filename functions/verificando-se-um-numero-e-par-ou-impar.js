// Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — mas a lógica precisa estar encapsulada em uma arrow function.

// Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:

// "Par" se o número for par
// "Ímpar" se for ímpar

import prompt from 'awt-prompt';

let numero = Number(await prompt('Digite um número:'));
numero = await verificarEntrada(numero);

const verificarParidade = (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    };
};

verificarParidade(numero);

async function verificarEntrada(numero) {
    let novoNumero = numero;
    while (isNaN(novoNumero)) {
        novoNumero = Number(await prompt('Entrada inválida. Por favor, digite um número válido:'));
    };
    return novoNumero;
};