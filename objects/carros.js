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
        if (carro.modelo === modeloAtual) {
            const nomeModeloAntigo = carro.modeloAntigo;
            
            delete carro.modeloAntigo;
            console.log(`\nModelo antigo "${nomeModeloAntigo}" removido do ${carro.modelo}:\n`);
            console.log(carro);
            console.log('');
            return;
        };
    };
};