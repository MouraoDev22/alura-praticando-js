// Você está criando um sistema de análise para um cliente que precisa identificar todos os números pares dentro de um intervalo informado. Ele quer saber quais valores são múltiplos de 2, para aplicar um filtro em dados financeiros.

// Crie um programa que exiba todos os números pares de 1 até o número final fornecido pelo usuário.

import prompt from 'awt-prompt';

let contador = 0;
let numero = Number(await prompt('Digite um número para listar os números pares até ele:'));
numero = await verificarEntrada(numero);

const mensagemDeFinalizacao = listarNumerosPares(numero);
console.log(mensagemDeFinalizacao);

async function verificarEntrada(numero) {
    let novoNumero = numero;
    while (isNaN(novoNumero) || novoNumero <= 0) {
        novoNumero = Number(await prompt('Entrada inválida. Por favor, digite um número válido: '));
    };
    return novoNumero;
};

function listarNumerosPares(numero) {
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i);
            contador++;
        };
    };
    return `Total de números pares listados até ${numero}: ${contador}.`;
};