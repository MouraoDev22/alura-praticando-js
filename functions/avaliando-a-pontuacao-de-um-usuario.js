// Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo.Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:

// . Foi aprovado, se a pontuação for igual ou maior que 70
// . Precisa de reforço, se a pontuação estiver entre 50 e 69
// . Foi reprovado, se a pontuação for menor que 50

// Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:

// . a pontuação final do jogador
// . uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.

import prompt from 'nprompt';

let pontos = Number(await prompt('Digite sua pontuação(de 0 a 100):'));
pontos = await verificarEntrada(pontos);

avaliarDesempenho(pontos, gerarMensagemAprovado, gerarMensagemReforco, gerarMensagemReprovado);

function avaliarDesempenho(pontuacao, callbackAprovado, callbackReforco, callbackReprovado) {
    console.log(`Pontuação: ${pontuacao}`);
    if (pontuacao >= 70) {
        callbackAprovado();
    } else if (pontuacao >= 50 && pontuacao < 70) {
        callbackReforco();
    } else {
        callbackReprovado();
    };
};

function gerarMensagemAprovado() {
    console.log('Parabéns! Você foi aprovado(a)!');
};

function gerarMensagemReforco() {
    console.log('Você precisa de reforço.');
};

function gerarMensagemReprovado() {
    console.log('Infelizmente você foi reprovado(a).');
};

async function verificarEntrada(pontos) {
    let novaPontuacao = pontos;
    while (isNaN(novaPontuacao) || novaPontuacao < 0) {
        novaPontuacao = Number(await prompt('Entrada inválida. Por favor, digite uma pontuação válida(de 0 a 100):'));
    };
    return novaPontuacao;
};