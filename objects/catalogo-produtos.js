// Você está desenvolvendo um sistema para uma loja online. Cada produto do catálogo deve ser representado por um objeto com informações de nome, preco e disponivel. Escreva um programa que:

// . Crie um objeto chamado produto.
// . O objeto deve conter as propriedades: nome, preco, disponivel.
// . Exiba o objeto no console.

const produtosEletronicos = [
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

exibirProduto(produtosEletronicos, 'Monitor', 'Teclado', 'Papa');

function exibirProduto(produtos, ...nomesProdutos) {
    console.log('\nCatálogo de Produtos:\n');
    for (const produto of produtos) {
        if (nomesProdutos.map(nome => nome.toLowerCase().replace(/\s/g, '')).includes(produto.nome.toLowerCase().replace(/\s/g, ''))) {
            console.log(`Nome: ${produto.nome}`);
            console.log(`Preço: ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
            console.log(`Disponível: ${produto.isDisponivel ? 'Sim' : 'Não'}`);
            console.log('');
        } else {
            console.log(`Produto "${produto.nome}" não encontrado no catálogo.\n`);
        };
    };
};