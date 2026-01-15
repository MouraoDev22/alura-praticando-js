// Imagine que você está desenvolvendo um site de compras. A pessoa só pode finalizar a compra se o carrinho não estiver vazio.

// Crie um programa que, com base na variável carrinhoVazio (booleana), verifique se a compra pode ser finalizada. Se o carrinho não estiver vazio, mostre: "Compra finalizada com sucesso!". Caso contrário, exiba: "Não é possível finalizar a compra: carrinho vazio."

let promptResposta = prompt("O carrinho está vazio? (1 para sim / 0 para não): ").toLowerCase();
const carrinhoVazio = verificarEntrada(promptResposta);

const resultado = verificarCarrinho(carrinhoVazio);
console.log(resultado);

function verificarEntrada(promptResposta) {
    while (promptResposta !== "1" && promptResposta !== "0") {
        promptResposta = prompt("Entrada inválida. O carrinho está vazio? (1 para sim / 0 para não): ").toLowerCase();
    }
    return promptResposta === "1";
}

function verificarCarrinho(carrinhoVazio) {
    return carrinhoVazio 
    ? "Não é possível finalizar a compra: carrinho vazio." 
    : "Compra finalizada com sucesso!";
}