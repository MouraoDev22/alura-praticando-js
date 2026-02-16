// Você está desenvolvendo um sistema de busca para uma biblioteca digital. Quando a pessoa usuária digita o nome de um livro, o sistema precisa verificar se ele está disponível na lista de títulos cadastrados. Escreva um programa que:

// . Crie um array com nomes de livros.
// . Crie uma variável com o nome de um livro procurado.
// . Verifique se o livro está na lista.
// . Exiba uma mensagem informando se o livro foi encontrado ou não.

import prompt from 'awt-prompt';

const nomesDeLivros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema', 'Dom Quixote'];
const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9.-\s]+$/;

await buscarLivro(nomesDeLivros);

async function buscarLivro(livros) {
    console.log('\nDigite o nome do livro que deseja buscar:\n');
    let nomeDoLivro = await prompt('> ');
    
    if (!regex.test(nomeDoLivro) || !nomeDoLivro.trim()) {
        console.log('\nEntrada inválida. Por favor, digite apenas letras, pontos, hífens, números e espaços.\n');
        return buscarLivro(livros);
    };

    for (const livro of livros) {
        if (livro.toLowerCase() === nomeDoLivro.toLowerCase()) {
            console.log(`\nLivro "${livro}" está disponível!\n`);
            return buscarOutroLivro(livros);
        };
    };

    console.log(`\nLivro "${nomeDoLivro}" não encontrado.\n`);
    return buscarOutroLivro(livros);
};

async function buscarOutroLivro(livros) {
    console.log('Deseja buscar outro livro? (s/n)\n');
    let resposta = await prompt('> ');
    resposta = resposta.trim().toLowerCase();
    
    if (resposta === 's') {
        return buscarLivro(livros);
    } else {
        console.log('\nPrograma encerrado.\n');
        return;
    };
};