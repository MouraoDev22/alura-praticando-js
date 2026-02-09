//Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas etárias. As regras são:

// . Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
// . Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
// . Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".

// Crie um programa que, dado o valor da idade, classifique a pessoa na categoria correspondente.

import prompt from 'awt-prompt';

let idade = Number(await prompt('Digite uma idade: '));
idade = await verificarEntrada(idade);

const resultado = classificarIdade(idade);
console.log(resultado);

async function verificarEntrada(idade) {
    let novaIdade = idade;
    while (isNaN(novaIdade) || novaIdade <= 0) {
        novaIdade = Number(await prompt('Idade inválida. Por favor, digite uma idade válida: '));
    };
    return novaIdade;
};

function classificarIdade(idade) {
    if (idade < 12) {
        return 'Essa pessoa está na categoria: Infantil';
    } else if (idade >= 12 && idade < 18) {
        return 'Essa pessoa está na categoria: Juvenil';
    } else if (idade >= 18 && idade < 60) {
        return 'Essa pessoa está na categoria: Adulto';
    } else {
        return 'Essa pessoa está na categoria: Idoso';
    };
};