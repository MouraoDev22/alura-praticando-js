// Você está desenvolvendo um sistema de controle de acesso para um evento. Para entrar, a pessoa precisa ter 18 anos ou mais.
// Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem informando se o acesso foi ou não permitido.

let idade = Number(prompt("Digite sua idade: "));
idade = verificarSeEhNumero(idade);

const resultado = verificarAcesso(idade);
console.log(resultado);

function verificarSeEhNumero(idade) {
    while (isNaN(idade) || idade < 0) {
        idade = Number(prompt("Idade inválida. Por favor, digite uma idade válida: "));
    }
    return idade;
}

function verificarAcesso(idade) {
    if (idade >= 18) {
        return "Acesso permitido.";
    } else {
        return "Acesso negado.";
    }
}