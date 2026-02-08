import prompt from "nprompt";

let numero = Number(await prompt("Digite um número:"));
numero = await verificarEntrada(numero);

contagemRegressiva(numero);

function contagemRegressiva(numero) {
    let numeroAtual = numero;
    console.log(numeroAtual);
    numeroAtual--;
    const id = setInterval(() => {
        console.log(numeroAtual);
        numeroAtual--;
        if (numeroAtual < 0) {
            clearInterval(id);
        };
    }, 1000);
};

async function verificarEntrada(numero) {
  let novoNumero = numero;
  while (isNaN(novoNumero)) {
    novoNumero = Number(await prompt("Entrada inválida. Por favor, digite um número válido:"));
  };
  return novoNumero;
};