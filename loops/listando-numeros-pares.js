// Você está criando um sistema de análise para um cliente que precisa identificar todos os números pares dentro de um intervalo informado. Ele quer saber quais valores são múltiplos de 2, para aplicar um filtro em dados financeiros.

// Crie um programa que exiba todos os números pares de 1 até o número final fornecido pelo usuário.

let contador = 0;
let numero = Number(prompt("Digite um número para listar os números pares até ele:"));
numero = verificarEntrada(numero);

const mensagemDeFinalizacao = listarNumerosPares(numero);
console.log(mensagemDeFinalizacao);

function verificarEntrada(numero) {
    while (isNaN(numero) || numero <= 0) {
        numero = Number(prompt("Entrada inválida. Por favor, digite um número válido: "));
    }
    return numero;
}

function listarNumerosPares(numero) {
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i);
            contador++;
        }
    }
    return `Total de números pares listados até ${numero}: ${contador}.`;
}