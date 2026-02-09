//Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:

// . Menor que 15: "Frio"
// . De 15 a 25: "Agradável"
// . Acima de 25: "Quente"

//Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente.

import prompt from 'awt-prompt';

let temperatura = Number(await prompt('Digite a temperatura do dia de hoje: '));
temperatura = await verificarEntrada(temperatura);

const resultado = verificarTemperatura(temperatura);
console.log(resultado);

async function verificarEntrada(temperatura) {
    let novoNumero = temperatura;
    while (isNaN(novoNumero)) {
        novoNumero = Number(await prompt('Temperatura inválida. Por favor, digite uma temperatura válida: '));
    };
    return novoNumero;
};

function verificarTemperatura(temperatura) {
    if (temperatura < 15) {
        return 'O clima do dia de hoje está frio.';
    } else if (temperatura >= 15 && temperatura <= 25) {
        return 'O clima do dia de hoje está agradável.';
    } else {
        return 'O clima do dia de hoje está quente.';
    };
};