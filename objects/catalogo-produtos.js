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