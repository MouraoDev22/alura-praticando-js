// Você está desenvolvendo um sistema para uma locadora de carros. Cada veículo tem informações cadastradas, mas agora a empresa decidiu remover a informação do modelo antigo dos carros. Escreva um programa que:

// . Crie um objeto carro com as propriedades: marca, modelo, ano, modeloAntigo;
// . Remova a propriedade modeloAntigo;
// . Exiba o objeto final no console.

const carros = [
    { 
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2022,
        modeloAntigo: 'Corolla XEi' 
    },
    { 
        marca: 'Honda',
        modelo: 'Civic',
        ano: 2020,
        modeloAntigo: 'Civic EX' 
    },
    { 
        marca: 'Ford',
        modelo: 'Focus',
        ano: 2018,
        modeloAntigo: 'Focus SE' 
    }
];

removerModeloAntigo(carros, 'Civic');

function removerModeloAntigo(carros, modeloAtual) {
    for (const carro of carros) {
        if (carro.modelo.toLowerCase().replace(/\s/g, '') === modeloAtual.toLowerCase().replace(/\s/g, '')) {
            const nomeModeloAntigo = carro.modeloAntigo;
            
            delete carro.modeloAntigo;
            console.log(`\nModelo antigo "${nomeModeloAntigo}" removido do ${carro.modelo}:\n`);
            console.log(carro);
            console.log('');
            return;
        };
    };
    console.log(`\nModelo "${modeloAtual}" não encontrado.\n`);
    return;
};