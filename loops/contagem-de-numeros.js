// Você está criando um aplicativo para exibir a sequência de números até um valor que o usuário forneceu. O objetivo é mostrar todos os números a partir de 1 até o valor informado pelo usuário, de forma ordenada e crescente.

// Como você pode gerar essa contagem e garantir que cada número seja mostrado até atingir o valor final fornecido?

let numeroFinal = Number(prompt("Digite um número final para a contagem:"));
numeroFinal = verificarEntrada(numeroFinal);

const mensagemDeFinalizacao = gerarContagem(numeroFinal);
console.log(mensagemDeFinalizacao);

function verificarEntrada(numeroFinal) {
    while (isNaN(numeroFinal) || numeroFinal <= 0) {
        numeroFinal = Number(prompt("Entrada inválida. Por favor, digite um número válido: "));
    }
    return numeroFinal;
}

function gerarContagem(numeroFinal) {
    for (let contador = 0; contador <= numeroFinal; contador++) {
        console.log(contador);
    }
    return "Contagem finalizada.";
}