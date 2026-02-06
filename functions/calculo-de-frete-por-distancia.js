// Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

// . Até 5 km: frete fixo de R$ 5
// . De 5.1 km até 20 km: R$ 0,50 por quilômetro
// . Acima de 20 km: frete fixo de R$ 20

// Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow Function? E aí? Como vai implementar esse desafio?

let distancia = Number(prompt("Digite a distância em km:"));
distancia = verificarEntrada(distancia);

const valorDoFrete = calcularFrete(distancia);
console.log(`O valor do frete é de R$${valorDoFrete.toFixed(2)}`);

function verificarEntrada(distancia) {
    let novaDistancia = distancia;
    while (isNaN(novaDistancia) || novaDistancia <= 0) {
        novaDistancia = Number(prompt("Entrada inválida. Por favor, digite uma distância válida:"));
    };
    return novaDistancia;
};

function calcularFrete(distancia) {
    if (distancia <= 5.099999999999999) {
        return 5;
    } else if (distancia <= 20) {
        return (distancia * 0.5) + 5;
    } else {
        return 20;
    };
};