// Você está criando um sistema para um jogo, onde o personagem tem que passar por duas condições para conseguir avançar para o próximo nível:

// . O personagem precisa ter mais de 50 pontos.
// . O personagem deve ter pelo menos uma vida restante.

// Crie um programa que, dado os pontos e as vidas restantes, verifique se o personagem pode ou não avançar para o próximo nível.

import prompt from 'awt-prompt';

const pontosMinimos = 50;
const vidasMinimas = 1;

let pontos = Number(await prompt('Digite a quantidade de pontos do personagem: '));
pontos = await verificarEntrada(pontos);

let vidas = Number(await prompt('Digite a quantidade de vidas do personagem: '));
vidas = await verificarEntrada(vidas);

const resultado = verificarStatus(pontos, vidas, pontosMinimos, vidasMinimas);
console.log(resultado);

async function verificarEntrada(valor) {
    let novoValor = valor;
    while (isNaN(novoValor) || novoValor <= 0) {
        novoValor = Number(await prompt('Entrada inválida. Por favor, digite um número válido: '));
    };
    return novoValor;
};

function verificarStatus(pontos, vidas, pontosMinimos, vidasMinimas) {
    if (pontos > pontosMinimos && vidas >= vidasMinimas) {
        return 'O personagem pode avançar para o próximo nível.';
    } else {
        return 'O personagem não pode avançar para o próximo nível.';
    };
};