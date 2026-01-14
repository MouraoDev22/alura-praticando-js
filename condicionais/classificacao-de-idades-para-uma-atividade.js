//Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas etárias. As regras são:

// . Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
// . Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
// . Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".

// Crie um programa que, dado o valor da idade, classifique a pessoa na categoria correspondente.

let idade = Number(prompt("Digite uma idade: "));
idade = verificarSeEhNumero(idade);

const resultado = classificarIdade(idade);
console.log(`Essa pessoa está na categoria: ${resultado}.`);

function verificarSeEhNumero(idade) {
    while (isNaN(idade) || idade < 0) {
        idade = Number(prompt("Idade inválida. Por favor, digite uma idade válida: "));
    }
    return idade;
}

function classificarIdade(idade) {
    if (idade < 12) {
        return "Infantil";
    } else if (idade >= 12 && idade < 18) {
        return "Juvenil";
    } else {
        return "Adulto";
    }
}