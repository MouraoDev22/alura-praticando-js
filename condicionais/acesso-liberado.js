// Você está desenvolvendo um sistema de controle de acesso para um evento. Para entrar, a pessoa precisa ter 18 anos ou mais.
// Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem informando se o acesso foi ou não permitido.

import prompt from 'awt-prompt';

let idade = Number(await prompt('Digite sua idade: '));
idade = await verificarEntrada(idade);

const resultado = verificarAcesso(idade);
console.log(resultado);

async function verificarEntrada(idade) {
    let novaIdade = idade;
    while (isNaN(novaIdade) || novaIdade <= 0) {
        novaIdade = Number(await prompt('Idade inválida. Por favor, digite uma idade válida: '));
    };
    return novaIdade;
};

function verificarAcesso(idade) {
    if (idade < 12) {
        return 'Acesso negado. Idade mínima não atingida.';
    } else if (idade >= 12 && idade < 18) {
        return 'Acesso parcial. Necessário acompanhamento.';
    } else {
        return 'Acesso permitido.';
    };
};