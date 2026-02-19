const receitaBoloDeChocolate = {
    nome: 'Bolo de Chocolate',
    ingredientes: [ 
        { nome: 'farinha de trigo', quantidade: '2 xícaras' },
        { nome: 'açúcar', quantidade: '1 xícara' },
        { nome: 'cacau em pó', quantidade: '1/2 xícara' },
        { nome: 'ovos', quantidade: '3 unidades' },
        { nome: 'leite', quantidade: '1/2 xícara' }
    ],
    tempoPreparo: '60 min'
};

exibirIngrediente(receitaBoloDeChocolate, 3);

function exibirIngrediente(receita, ...numIngrediente) {
    console.log(`\nReceita: ${receita.nome}\n`);
    for (const num of numIngrediente) {
        console.log(`Ingrediente complementar: ${receita.ingredientes[num - 1].nome[0].toUpperCase() + receita.ingredientes[num - 1].nome.slice(1)} - ${receita.ingredientes[num - 1].quantidade}`);
    };
    console.log('');
    return;
};