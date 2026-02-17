const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75, totalDeVendas: function() { return this.preco * this.quantidadeVendida } },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180, totalDeVendas: function() { return this.preco * this.quantidadeVendida } },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125, totalDeVendas: function() { return this.preco * this.quantidadeVendida } },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95, totalDeVendas: function() { return this.preco * this.quantidadeVendida } },
  { nome: 'Impressora', preco: 600, quantidadeVendida: 60, totalDeVendas: function() { return this.preco * this.quantidadeVendida } }
];

exibirRelatorioDeVendas(produtos, exibirProdutos, exibirProdutosMaisVendidos, calcularTotalDeVendas, exibirProdutoMaisLucrativo);

function exibirRelatorioDeVendas(produtos, exibirProdutos, exibirProdutosMaisVendidos, calcularTotalDeVendas, exibirProdutoMaisLucrativo) {
    console.log('\nRelatório de Vendas:\n');
    exibirProdutos(produtos);
    
    console.log('');

    console.log('\nProdutos com alto volume de vendas ()> 100 unidades):\n');
    exibirProdutosMaisVendidos(produtos);
    
    console.log('');

    console.log('\nTotal de vendas por produto:\n');
    calcularTotalDeVendas(produtos);

    console.log('\n');
    console.log(`Produto mais lucrativo: ${exibirProdutoMaisLucrativo(produtos)}\n`);
    return;
};

function exibirProdutos(produtos) {
    for (const produto of produtos) {
        console.log(`Produto: ${produto.nome} | Preço: ${produto.preco} | Quantidade vendida: ${produto.quantidadeVendida}`);
    };
    return;
};

function exibirProdutosMaisVendidos(produtos) {
    for (const produto of produtos) {
        if (produto.quantidadeVendida > 100) {
            console.log(produto.nome);
        };
    };
    return;
};

function calcularTotalDeVendas(produtos) {
    for (const produto of produtos) {
        console.log(`${produto.nome}: R$ ${produto.totalDeVendas().toFixed(2)}`);
    };
};

function exibirProdutoMaisLucrativo(produtos) {
    let cloneDosProdutos = [...produtos];
    cloneDosProdutos.sort((a, b) => b.totalDeVendas() - a.totalDeVendas());
    return `${cloneDosProdutos[0].nome} com um total de vendas de R$ ${cloneDosProdutos[0].totalDeVendas().toFixed(2)}`;
};