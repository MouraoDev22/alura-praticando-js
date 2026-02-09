// Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo com base na porcentagem de carga. O sistema deve classificar a bateria nas seguintes categorias:

// . "Crítica": se a bateria estiver abaixo de 20%
// . "Moderada": se estiver entre 20% e 80%
// . "Cheia": se estiver acima de 80%

// Utilize o operador ternário para definir e exibir a categoria da bateria com base no valor da variável bateria.

import prompt from 'awt-prompt';

let bateria = Math.floor(Number(await prompt('Digite a porcentagem de carga da bateria: ')));
bateria = await verificarEntrada(bateria);

const resultado = verificarBateria(bateria);
console.log(resultado);

async function verificarEntrada(bateria) {
    let novaBateria = bateria;
    while (isNaN(novaBateria) || novaBateria < 0 || novaBateria > 100) {
        novaBateria = Number(await prompt('Entrada inválida. Por favor, digite uma porcentagem válida (0-100): '));
    };
    return novaBateria;
};

function verificarBateria(bateria) {
    return bateria < 20 
    ? `${bateria}% - Carga da bateria crítica.` 
    : bateria <= 80 
    ? `${bateria}% - Carga da bateria moderada.` 
    : `${bateria}% - Carga da bateria cheia.`;
};