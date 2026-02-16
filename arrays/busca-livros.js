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
            console.log(`\nLivro "${livro}" encontrado!\n`);
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