// Você está desenvolvendo um sistema para uma loja online. Cada produto do catálogo deve ser representado por um objeto com informações de nome, preco e disponivel. Escreva um programa que:

// . Crie um objeto chamado produto.
// . O objeto deve conter as propriedades: nome, preco, disponivel.
// . Exiba o objeto no console.

const produtos = [
    {
        nome: 'Monitor',
        preco: 500,
        isDisponivel: true
    },
    {
        nome: 'Teclado',
        preco: 100,
        isDisponivel: true
    },
    {
        nome: 'Mouse',
        preco: 50,
        isDisponivel: false
    } 
];

exibirProdutos(produtos);

function exibirProdutos(produtos) {
    console.log('\nCatálogo de Produtos:\n');
    for (const produto of produtos) {
        console.log(`Nome: ${produto.nome}`);
        console.log(`Preço: ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        console.log(`Disponível: ${produto.isDisponivel ? 'Sim' : 'Não'}`);
        console.log('');
    };
};