// Imagine que você está desenvolvendo uma funcionalidade de importação de dados para uma empresa. Os dados chegam como um array de pares, onde cada par representa uma chave e seu respectivo valor, e você precisa transformar isso em um objeto estruturado, que será usado pelo sistema para preencher os campos automaticamente.

// Sua tarefa é:

// . Criar uma função chamada montarObjeto que receba como parâmetro um array de pares chave-valor, como este:

const array = [
  ['nome', 'João'],
  ['idade', 30],
  ['cidade', 'Curitiba']
];

const novoObjeto = montarObjeto(array);
console.log(novoObjeto);

function montarObjeto(array) {
    const objeto = {};
    
    for (const [chave, valor] of array) {
        objeto[chave] = valor;
    };
    return objeto;
};

// é mais prático usar o Object.fromEntries()