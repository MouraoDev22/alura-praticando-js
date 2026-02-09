// Você está criando um aplicativo para exibir a sequência de números até um valor que o usuário forneceu. O objetivo é mostrar todos os números a partir de 1 até o valor informado pelo usuário, de forma ordenada e crescente.

// Como você pode gerar essa contagem e garantir que cada número seja mostrado até atingir o valor final fornecido?

import prompt from 'awt-prompt';

let numeroFinal = Number(await prompt('Digite um número final para a contagem:'));
numeroFinal = await verificarEntrada(numeroFinal);

const mensagemDeFinalizacao = gerarContagem(numeroFinal);
console.log(mensagemDeFinalizacao);

async function verificarEntrada(numeroFinal) {
    let novoNumeroFinal = numeroFinal;
    while (isNaN(novoNumeroFinal) || novoNumeroFinal <= 0) {
        novoNumeroFinal = Number(await prompt('Entrada inválida. Por favor, digite um número válido: '));
    };
    return novoNumeroFinal;
};

function gerarContagem(numeroFinal) {
    for (let contador = 0; contador <= numeroFinal; contador++) {
        console.log(contador);
    };
    return 'Contagem finalizada.';
};