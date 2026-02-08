// Você está desenvolvendo um sistema para ajudar pessoas a entenderem melhor o consumo de energia elétrica de seus aparelhos eletrônicos. O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.

// Sua missão é criar três funções separadas, com responsabilidades bem definidas:

// . calcularConsumo(potencia, horasPorDia): Retorna o consumo mensal em kWh, com base na fórmula: consumo = (potencia × horasPorDia × 30) / 1000
// . classificarConsumo(consumo): Retorna a classificação com base na tabela:
// . exibirResumo(nomeAparelho, consumo, classificacao): Exibe uma mensagem como:"Geladeira tem consumo de 180 kWh/mês e é classificada como Consumo moderado."

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
