//Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:

// . Menor que 15: "Frio"
// . De 15 a 25: "Agradável"
// . Acima de 25: "Quente"

//Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente.

let temperatura = Number(prompt("Digite a temperatura do dia de hoje: "));
temperatura = verificarSeEhNumero(temperatura);

const resultado = verificarTemperatura(temperatura);
console.log(`O clima do dia de hoje está ${resultado}.`);

function verificarSeEhNumero(temperatura) {
    while (isNaN(temperatura)) {
        temperatura = Number(prompt("Temperatura inválida. Por favor, digite uma temperatura válida: "));
    }
    return temperatura;
}

function verificarTemperatura(temperatura) {
    if (temperatura < 15) {
        return "frio.";
    } else if (temperatura >= 15 && temperatura <= 25) {
        return "agradável.";
    } else {
        return "quente.";
    }
}