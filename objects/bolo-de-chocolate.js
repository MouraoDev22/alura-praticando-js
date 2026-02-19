// Você está criando um aplicativo de culinária que mostra receitas com seus ingredientes, tempo de preparo e instruções. Cada receita é representada por um objeto que contém uma lista de ingredientes armazenada como um array. Diante disso, escreva um programa que:

// . Crie um objeto receita com as propriedades: nome, ingredientes (array com pelo menos 5 itens) e tempoPreparo.
// Acesse o índice 2 da lista que está dentro do objeto.
// Exiba no console a frase: "Ingrediente complementar: [ingrediente]".

const receitasDeBolo = [
    {
        nome: 'Bolo de Chocolate',
        ingredientes: [ 
            { nome: 'farinha de trigo', quantidade: '2 xícaras' },
            { nome: 'açúcar', quantidade: '1 xícara' },
            { nome: 'cacau em pó', quantidade: '1/2 xícara' },
            { nome: 'ovos', quantidade: '3 unidades' },
            { nome: 'leite', quantidade: '1/2 xícara' }
        ],
        tempoPreparo: '60 min'
    },
    {
        nome: 'Bolo de Cenoura',
        ingredientes: [ 
            { nome: 'cenoura', quantidade: '2 unidades' },
            { nome: 'farinha de trigo', quantidade: '2 xícaras' },
            { nome: 'açúcar', quantidade: '1 xícara' },
            { nome: 'ovos', quantidade: '3 unidades' },
            { nome: 'óleo', quantidade: '1/2 xícara' }
        ],
        tempoPreparo: '45 min'
    },
    {
        nome: 'Bolo de Laranja',
        ingredientes: [
            { nome: 'laranja', quantidade: '3 unidades' },
            { nome: 'farinha de trigo', quantidade: '2 xícaras' },
            { nome: 'açúcar', quantidade: '1 xícara' },
            { nome: 'ovos', quantidade: '3 unidades' },
            { nome: 'óleo', quantidade: '1/2 xícara' }
        ],
        tempoPreparo: '50 min'
    }
];

exibirIngrediente(receitasDeBolo[1], 3);

function exibirIngrediente(receita, ...numIngrediente) {
    console.log(`\nReceita: ${receita.nome}\n`);
    for (const num of numIngrediente) {
        console.log(`Ingrediente complementar: ${receita.ingredientes[num - 1].nome[0].toUpperCase() + receita.ingredientes[num - 1].nome.slice(1)} - ${receita.ingredientes[num - 1].quantidade}`);
    };
    console.log('');
    return;
};