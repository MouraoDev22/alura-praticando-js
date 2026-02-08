// Você está criando um sistema de cadastro em que a pessoa usuária pode cadastrar quantos nomes quiser, um por vez. O processo deve continuar até que seja encontrado a palavra "fim" (com letras minúsculas).

// Crie um programa que com base em uma entrada pré-definida de nomes, exiba cada um deles, e encerre somente quando encontrar o valor "fim".

import prompt from 'nprompt';

let listaDeNomes = [];
const regex = /^[A-Za-zÀ-ú\s]+$/;
const palavraFim = 'fim';

await inserirNomes();
listarNomes(listaDeNomes);

async function inserirNomes() {
    for (let i = 0; i < 9; i++) {
        let nome = await prompt('Digite um nome:');
        while (!regex.test(nome)) {
            nome = await prompt('Entrada inválida. Por favor, digite um nome válido:');
        };
        listaDeNomes.push(nome);
    };
    const nomeFinal = listaDeNomes[6];

    listaDeNomes.push(nomeFinal);
    listaDeNomes[7] = palavraFim;
};

function listarNomes(nomes) {
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === 'fim') {
            break;
        };
        console.log(nomes[i]);
    };
};