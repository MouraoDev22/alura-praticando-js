// Você está desenvolvendo um sistema de pagamento e todos os produtos precisam receber um desconto de 10% antes de serem exibidos para as pessoas. Escreva um programa que:

// . Crie um array com os preços originais dos produtos.
// , Use o método map() para aplicar 10% de desconto em cada item.
// . Exiba o novo array com os preços já com o desconto aplicado.

const precos = [100, 80, 50, 120, 90];

exibirPrecos(precos);

function exibirPrecos(precos, aplicarDesconto) {
    console.log('\nPreços originais:\n');
    precos.forEach((preco, index) => {
        console.log(`${index + 1}. R$${preco.toFixed(2)}`);
    });
    
    const precosComDesconto = aplicarDesconto(precos);
    console.log('\nPreços com desconto de 10%:\n');
    precosComDesconto.forEach((preco, index) => {
        console.log(`${index + 1}. R$${preco.toFixed(2)}`);
    });
    console.log('');
    return;
};

function aplicarDesconto(precos) { return precos.map(preco => preco - (preco * 0.1)) };