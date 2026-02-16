// Imagine que você está desenvolvendo um sistema para controlar uma lista de compras. O primeiro passo é permitir que a pessoa usuária acesse e altere os itens dessa lista.

// Escreva um programa que:

// . Crie um array com os itens iniciais da lista de compras.
// . Acesse e exiba o segundo item da lista.
// . Modifique o último item da lista para um novo valor.

import prompt from 'awt-prompt';

const listaDeCompras = [ 
    {nome: 'Arroz', quantidade: 1, unidade: 'kg'},
    {nome: 'Feijão', quantidade: 1, unidade: 'kg'},
    {nome: 'Carne', quantidade: 500, unidade: 'g'},
    {nome: 'Leite', quantidade: 1, unidade: 'litro'},
    {nome: 'Ovos', quantidade: 12, unidade: 'unidades'}
];

await exibirLista(listaDeCompras);

async function exibirLista(lista) {
    if (lista.length === 0) {
        console.log('\nA lista de compras está vazia.\nObrigado por usar a lista de compras!');
        return;
    };
    
    console.log('\nLista de Compras:\n');
    
    lista.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} - ${item.quantidade} ${item.unidade}`);
    });
    
    let resposta = await prompt('\nDeseja acessar algum item específico? (s/n)');
    resposta = resposta.toLowerCase();
    
    if (resposta === 's') {
        return acessarItem(lista);
    } else if (resposta === 'n') {
        console.log('\nObrigado por usar a lista de compras!');
    } else {
        console.log('Resposta inválida. Por favor, responda com "s" ou "n".');
        return exibirLista(lista);
    };
};

async function acessarItem(lista) {
    const index = Number(await prompt('\nDigite o número do item que deseja acessar:')) - 1;
    
    if (index >= 0 && index < lista.length) {
        console.log(`\nItem selecionado: ${lista[index].nome} - ${lista[index].quantidade} ${lista[index].unidade}`);
        
        let resposta = await prompt('\nDeseja modificar alguma coisa nesse item? (s/n)');
        resposta = resposta.toLowerCase();
        
        if (resposta === 's') {
            return modificarItem(lista, index);
        } else if (resposta === 'n') {
            console.log('\nVoltando para a lista de compras...');
            return exibirLista(lista);
        } else {
            console.log('Resposta inválida. Por favor, responda com "s" ou "n".');
            return acessarItem(lista);
        };
    } else {
        console.log('\nÍndice inválido. Por favor, escolha um número válido.');
        return acessarItem(lista);
    };
};

async function modificarItem(lista, index) {
    console.log(`\nModificando item: ${lista[index].nome} - ${lista[index].quantidade} ${lista[index].unidade}`);
    console.log('\n1. Quantidade\n2. Remover item\n3. Voltar para a lista');
    let resposta = Number(await prompt('\nO que você gostaria de modificar?\nDigite o número da opção desejada:'));
    
    if (isNaN(resposta) || resposta < 1 || resposta > 3) {
        console.log('\nOpção inválida. Por favor, escolha uma opção válida.');
        return modificarItem(lista, index);
    };
    
    switch (resposta) {
        case 1:
            let novaQuantidade = Number(await prompt('\nDigite a nova quantidade:'));
            novaQuantidade = await verificarEntrada(novaQuantidade);
            lista[index].quantidade = novaQuantidade;
            console.log('\nQuantidade atualizada com sucesso!');
            break;
        case 2:
            lista.splice(index, 1);
            console.log('\nItem removido com sucesso!');
            break;
        case 3:
            console.log('\nVoltando para a lista de compras...');
            break;
        default:
            console.log('\nOpção inválida. Por favor, escolha uma opção válida.');
            break;
    };
    return exibirLista(lista);
};

async function verificarEntrada(entrada) {
    let novoValor = entrada;
    while (isNaN(novoValor) || novoValor < 1) {
        novoValor = Number(await prompt('\nEntrada inválida. Por favor, digite um número válido:'));
    };
    return novoValor;
};