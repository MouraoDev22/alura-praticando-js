// Imagine que você está desenvolvendo uma interface de atendimento online.Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.

// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

// . o nome do usuário, e
// . uma função de callback que será executada após 3 segundos.

import prompt from 'nprompt';

const regex = /^[A-Za-zÀ-ú\s]+$/;
let nome = await prompt('Qual é o seu nome?');
nome = await verificarEntrada(nome);

responderUsuario(nome, mostrarResposta);

function responderUsuario(nome, mostrarResposta) {
    console.log('Processando sua pergunta...');
    setTimeout(() => {
        mostrarResposta(nome);
    }, 3000);
};

function mostrarResposta(nome) {
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
};

async function verificarEntrada(nome) {
    let novoNome = nome;
    while (!regex.test(novoNome) || !novoNome) {
        novoNome = await prompt('Entrada inválida. Por favor, digite um nome válido:');
    };
    return novoNome;
};