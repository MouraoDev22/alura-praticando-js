const aparelhos = ['Geladeira', 'Microondas', 'Fogão', 'Máquina de Lavar', 'Lava Louças', 'Televisão', 'Ar Condicionado', 'Computador'];
const nomeAparelho = aparelhos[Math.floor(Math.random() * aparelhos.length)];
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);

exibirResumo(nomeAparelho, consumo, classificacao);

function exibirResumo(aparelho, consumo, classificacao) {
    console.log(`${aparelho} tem consumo de ${consumo} kWh/mês e é classificado como ${classificacao}.`);
};

function calcularConsumo(potencia, horasPorDia) {
    return (potencia * horasPorDia * 30) / 1000;
};

function classificarConsumo(consumo) {
    if (consumo >= 200) {
        return 'Alto consumo';
    } else if (consumo >= 50 && consumo < 200) {
        return 'Médio consumo';
    } else {
        return 'Baixo consumo';
    };
};
