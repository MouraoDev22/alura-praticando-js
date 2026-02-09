// Você está desenvolvendo um sistema para verificação de compatibilidade de frutas em um processo de preparo de sucos. O sistema precisa verificar se o tipo de fruta informado é compatível com o tipo esperado, de acordo com uma receita.

// . O suco pode ser feito somente com "laranja" ou "abacaxi".
// . Qualquer outra fruta que não seja "laranja" ou "abacaxi" deve gerar uma mensagem de erro, informando que a fruta não é compatível.

// Crie um programa que, dado o nome da fruta, verifique se ela é compatível com a receita.

import prompt from 'awt-prompt';

const frutas = ['laranja', 'abacaxi', 'morango', 'banana', 'uva', 'mamão', 'manga', 'pera', 'goiaba', 'kiwi'];
const frutasCompativeis = ['laranja', 'abacaxi'];

let frutaInformada = (await prompt('Digite o nome da fruta para verificar a compatibilidade com a receita de suco: ')).toLowerCase();
frutaInformada = await verificarEntrada(frutaInformada);

const mensagemDeCompatibilidade = verificarListaDeFrutas(frutaInformada, frutas, frutasCompativeis);
console.log(mensagemDeCompatibilidade);

async function verificarEntrada(frutaInformada) {
    const regexFruta = /^[a-zA-ZÀ-ÿ\s]+$/;
    let novaFrutaInformada = frutaInformada;
    while (!regexFruta.test(novaFrutaInformada) || novaFrutaInformada.trim() === '') {
        novaFrutaInformada = (await prompt('Entrada inválida. Digite apenas o nome de uma fruta que esteja na lista: ')).toLowerCase();
    };
    return novaFrutaInformada;
};

function verificarListaDeFrutas(frutaInformada, frutas, frutasCompativeis) {
    if (!frutas.includes(frutaInformada)) {
        return `A fruta ${frutaInformada} não está na lista de frutas disponíveis.`;
    };
    if (frutasCompativeis.includes(frutaInformada)) {
        return `A fruta ${frutaInformada} é compatível com a receita de suco.`;
    };
    return `A fruta ${frutaInformada} não é compatível com a receita de suco.`;
};