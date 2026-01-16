// Você é uma pessoa desenvolvedora de interface em uma startup de tecnologia aeroespacial e precisa criar uma contagem regressiva automática para o painel de lançamento. A contagem deve começar de 10 até 0, exibindo “Lançar!” ao final.

// Crie um programa que conte de 10 até 0 e exiba a mensagem “Lançar!” ao final.

const numeroFinal = 10;
gerarContagem(numeroFinal);

function gerarContagem(numeroFinal) {
    for (let contador = numeroFinal; contador >= 0; contador--) {
        setTimeout(() => {
            console.log(contador);
        }, (numeroFinal - contador) * 1000);
    }
    setTimeout(() => {
        console.log("Lançar!");
    }, (numeroFinal + 1) * 1000);
}