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
        nome: 'Mouse e Teclado',
        preco: 50,
        isDisponivel: false
    } 
];

exibirProdutos(produtosEletronicos, 'Papa');

function exibirProdutos(produtos, ...nomesProdutos) {
    const nomesProdutosFormatados = nomesProdutos.map(nome => nome.toLowerCase().replace(/\s/g, ''));
    const produtosFiltrados = produtos.filter(produto => nomesProdutosFormatados.includes(produto.nome.toLowerCase().replace(/\s/g, '')));
    const produtosNaoEncontrados = nomesProdutos.filter(nome => !produtosFiltrados.includes(nome.toLowerCase().replace(/\s/g, '')));
    
    if (produtosFiltrados.length > 0) {
        for (const produto of produtosFiltrados) {
            console.log('');
            console.log(`Nome: ${produto.nome}`);
            console.log(`Preço: ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
            console.log(`Disponível: ${produto.isDisponivel ? 'Sim' : 'Não'}`);
            console.log('');
            return;
        }; 
    } else {
        console.log('\nNenhum produto encontrado.\n');
        return;
    };
    produtosFiltrados.length === 0 ? console.log('\nNenhum produto encontrado.\n') : console.log('');
    produtosNaoEncontrados.length > 0 ? exibirProdutosNaoEncontrados(produtosNaoEncontrados) : console.log('');
    return
};

function exibirProdutosNaoEncontrados(produtosNaoEncontrados) {
    for (const nomeProduto of produtosNaoEncontrados) {
        console.log(`\nProduto "${nomeProduto}" não encontrado.\n`);
    };
    return;
};