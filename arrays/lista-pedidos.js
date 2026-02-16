// Você está desenvolvendo um sistema de pedidos online. Em certo momento, o sistema precisa criar uma cópia da lista de pedidos para simular alterações, sem modificar o array original. Escreva um programa que:

// . Crie um array com alguns pedidos.
// . Faça uma cópia do array.
// . Adicione um novo item apenas na cópia.
// . Exiba os dois arrays para mostrar que o original não foi alterado.

import prompt from 'awt-prompt';

const pedidos = [
    { nome: 'camiseta', preco: 29.90, quantidade: 3, total: function() { return (this.preco * this.quantidade) } },
    { nome: 'calça', preco: 39.90, quantidade: 2, total: function() { return (this.preco * this.quantidade) } },
    { nome: 'tênis', preco: 89.90, quantidade: 1, total: function() { return (this.preco * this.quantidade) } } 
];

class Pedido {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    };

    total() {
        return (this.preco * this.quantidade);
    };
};

const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9.-\s]+$/;

await exibirPedidos(pedidos);

async function exibirPedidos(pedidos) {
    console.log('\nLista de Pedidos:\n');
    
    pedidos.forEach(pedido => {
        console.log(`Produto: ${pedido.nome}, Preço: R$${pedido.preco.toFixed(2)}, Quantidade: ${pedido.quantidade}, Total: R$${pedido.total().toFixed(2)}`);
    });
    
    console.log('\nDeseja adicionar um novo pedido? (s/n)\n');
    let resposta = await prompt('> ');
    
    if (resposta.toLowerCase() === 's') {
        return adicionarPedido(pedidos);
    } else if (resposta.toLowerCase() === 'n') {
        console.log('\nPrograma encerrado.\n');
        return;
    } else {
        console.log('\nResposta inválida. Por favor, responda com "s" ou "n".');
        return exibirPedidos(pedidos);
    };
};

async function adicionarPedido(pedidos) {
    const novaLista = [...pedidos];
    
    console.log('\nDigite o nome do produto:\n');
    let nome = await prompt('> ');
    nome = await verificarEntradaString(nome);
    
    console.log('\nDigite o preço do produto:\n');
    let preco = Number(await prompt('> '));
    preco = await verificarEntradaNumber(preco);

    console.log('\nDigite a quantidade do produto:\n');
    let quantidade = Number(await prompt('> '));
    quantidade = await verificarEntradaNumber(quantidade);

    const novoPedido = new Pedido(nome, preco, quantidade);
    novaLista.push(novoPedido);

    console.log(`\nPedido adicionado com sucesso!`);
    return exibirPedidos(novaLista); 
};

async function verificarEntradaString(entrada) {
    let novaEntrada = entrada;
    while (!regex.test(novaEntrada) || !novaEntrada.trim()) {
        console.log('\nEntrada inválida. Por favor, digite apenas letras, pontos, hífens, números e espaços.\n');
        novaEntrada = await prompt('> ');
    };
    return novaEntrada;
};

async function verificarEntradaNumber(entrada) {
    let novaEntrada = entrada;
    while (isNaN(novaEntrada) || novaEntrada <= 0) {
        console.log('\nEntrada inválida. Por favor, digite um número válido maior que zero.\n');
        novaEntrada = Number(await prompt('> '));
    };
    return novaEntrada;
};