// Você está criando um aplicativo de culinária que mostra receitas com seus ingredientes, tempo de preparo e instruções. Cada receita é representada por um objeto que contém uma lista de ingredientes armazenada como um array. Diante disso, escreva um programa que:

// . Crie um objeto receita com as propriedades: nome, ingredientes (array com pelo menos 5 itens) e tempoPreparo.
// . Acesse o índice 2 da lista que está dentro do objeto.
// . Exiba no console a frase: "Ingrediente complementar: [ingrediente]".

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

exibirIngredientes(receitasDeBolo, 'Bolo de Chocolate', 3);

function exibirIngredientes(tipoReceita, nomeReceita, ...numIngredientes) {
    for (const receita of tipoReceita) {
        if (receita.nome.toLowerCase().replace(/\s/g, '') === nomeReceita.toLowerCase().replace(/\s/g, '')) {
            const receitaEncontrada = { ...receita };
            
            console.log(`\nReceita: ${receitaEncontrada.nome}\n`);
            for (const num of numIngredientes) {
                console.log(`Ingrediente complementar: ${receitaEncontrada.ingredientes[num - 1].nome[0].toUpperCase() + receitaEncontrada.ingredientes[num - 1].nome.slice(1)} - ${receitaEncontrada.ingredientes[num - 1].quantidade}`);
            };
            console.log('');
            return;
        } else {
            console.log(`Receita "${nomeReceita}" não encontrada.`);
            return;
        };
    };
};