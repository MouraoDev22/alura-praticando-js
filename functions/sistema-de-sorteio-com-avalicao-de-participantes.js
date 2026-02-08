const participantes = [
  { nome: 'Laura', pontuacao: 92 },
  { nome: 'Pedro', pontuacao: 67 },
  { nome: 'Clara', pontuacao: 44 },
  { nome: 'Roberto', pontuacao: 40},
  { nome: 'João', pontuacao: 34},
  { nome: 'Ivna', pontuacao: 99}
];

realizarSorteio(participantes, avaliarPontuacao);

function realizarSorteio(participantes, callback) {
    const participanteSorteado = participantes[Math.floor(Math.random() * participantes.length)];
    console.log('Realizando sorteio...')
    setTimeout(() => {
        console.log(`Participante sorteado: ${participanteSorteado.nome}`);
        callback(participanteSorteado);
    }, 2000);
};

function avaliarPontuacao(participante) {
    if (participante.pontuacao >= 80) {
        console.log(`Pontuação: ${participante.pontuacao}\nParabéns, você foi premiado!`);
    } else if (participante.pontuacao >= 50 && participante.pontuacao < 80) {
        console.log(`Pontuação: ${participante.pontuacao}\nVocê quase conseguiu! Fique de olho nos próximos sorteios.`);
    } else {
        console.log(`Pontuação: ${participante.pontuacao}\nInfelizmente, não foi dessa vez.`);
    };
};