// Você foi a pessoa encarregada de desenvolver uma funcionalidade para o sistema de inspeções técnicas de uma fábrica. Cada máquina inspecionada gera automaticamente um relatório de medições, contendo dados como temperatura, vibração, pressão e nível de ruído. Essas informações são organizadas dentro de um objeto, onde cada chave representa uma categoria avaliada e o valor representa o nível registrado na inspeção.

// . Exibir todas as categorias avaliadas;
// . Exibir todos os valores registrados;
// . Percorra todas as medições (pares categoria/valor) e imprima um detalhamento com status, seguindo a seguinte lógica:
// .   Se o valor for maior que 50, mostre a mensagem (alerta)
// .   Caso contrário, mostre (ok)

const relatorio = {
    temperatura: 75,
    vibracao: 40,
    pressao: 55,
    nivelRuido: 30
};

exibirRelatorio(relatorio);

function exibirRelatorio(relatorio) {
    console.log('');
    console.log(`Categorias avaliadas: ${Object.keys(relatorio).join(', ')}`);
    console.log(`Valores registrados: ${Object.values(relatorio).join(', ')}`);
    
    console.log('\nDetalhamento:')
    for (const propriedade in relatorio) {
        if (relatorio[propriedade] > 50) {
            console.log(`${propriedade[0].toUpperCase() + propriedade.slice(1)}: ${relatorio[propriedade]} (alerta)`);
        } else {
            console.log(`${propriedade[0].toUpperCase() + propriedade.slice(1)}: ${relatorio[propriedade]} (ok)`);
        };
    };
    console.log('');
    return;
};