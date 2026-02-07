// Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

// Sua tarefa é criar uma função chamada processarPedido, que receba três parâmetros:

// . o nome do cliente,
// . o tipo do cliente (vip, novo ou comum),
// . e uma função de callback responsável por exibir uma mensagem após o pedido ser processado.

const regex = /^[A-Za-zÀ-ú\s]+$/;
let nome = prompt("Qual é o seu nome?");
nome = verificarNome(nome);

let categoria = prompt("Qual é a sua categoria?(vip, novo ou comum)");
categoria = verificarCategoria(categoria);

processarPedido(nome, categoria, mensagemPersonalizada);

function processarPedido(nome, categoria, mensagem) {
    console.log(`Processando pedido de ${nome}...`);
    console.log(mensagem(nome, categoria));
};

function mensagemPersonalizada(nome, categoria) {
    if (categoria === "vip") {
        return (`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else if (categoria === "novo") {
        return (`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else {
        return (`Obrigado pela sua compra, ${nome}!`);
    };
};

function verificarNome(nome) {
    let novoNome = nome;
    while (!regex.test(novoNome) || !novoNome) {
        novoNome = prompt("Entrada inválida. Por favor, digite um nome válido:");
    };
    return novoNome;
};

function verificarCategoria(categoria) {
    let novaCategoria = categoria;
    while (novaCategoria !== "vip" && novaCategoria !== "novo" && novaCategoria !== "comum") {
        novaCategoria = prompt("Entrada inválida. Por favor, digite uma categoria válida(vip, novo ou comum):");
    };
    return novaCategoria;
};