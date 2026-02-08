import prompt from "nprompt";

let numero = Number(await prompt("Digite um número:"));
numero = await verificarEntrada(numero);

contagemRegressiva(numero);

function contagemRegressiva(numero) {
  if (numero < 1) {
    console.log('Lançamento!');
    return
  };

  console.log(numero);

  setTimeout(() => {
    contagemRegressiva(numero - 1);
  }, 1000);
};

async function verificarEntrada(numero) {
  let novoNumero = numero;
  while (isNaN(novoNumero)) {
    novoNumero = Number(await prompt("Entrada inválida. Por favor, digite um número válido:"));
  };
  return novoNumero;
};