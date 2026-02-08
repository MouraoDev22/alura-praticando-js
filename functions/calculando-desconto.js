// Imagine que você está criando um sistema para um e-commerce que vende livros.Toda vez que o cliente aplica um cupom de desconto, o sistema precisa calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto.

// Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:

// . o preço original do produto,
// . a porcentagem de desconto (com um valor padrão de 10%).

import prompt from 'nprompt';

const valorDoDesconto = 10;
let valorDaCompra = Number(await prompt('Digite o valor da sua compra:'));
valorDaCompra = await verificarEntrada(valorDaCompra);

const valorDaCompraComDesconto = calcularDesconto(valorDaCompra, valorDoDesconto);
console.log(`O valor da sua compra com desconto é de R$${valorDaCompraComDesconto.toFixed(2)}`);

function calcularDesconto(preco, desconto) {
    return preco - (preco * (desconto / 100));
};

async function verificarEntrada(valor) {
    let novoValorDaCompra = valor;
    while (isNaN(novoValorDaCompra) || novoValorDaCompra <= 0) {
        novoValorDaCompra = Number(await prompt('Entrada inválida. Por favor, digite um valor válido:'));
    };
    return novoValorDaCompra;
};
