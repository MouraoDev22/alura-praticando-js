const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 },
  { nome: 'Felipe', idade: 20 },
  { nome: 'Gabriela', idade: 18 },
  { nome: 'Hugo', idade: 23 },
  { nome: 'Isabela', idade: 16 },
  { nome: 'Pedro', idade: 22 }
];

verificarAcesso(participantes, filtrarParticipantes, nomearParticipantes);

function verificarAcesso(participantes, filtrarParticipantes, nomearParticipantes) {
  const participantesAprovados = filtrarParticipantes(participantes);
  console.log('');
  for (const participante of participantesAprovados) {
    console.log(`Acesso liberado para: ${participante.nome}`);
  };
  console.log('');

  const nomesDosAprovados = nomearParticipantes(participantesAprovados); 
  console.log(`Lista dos aprovados: ${nomesDosAprovados.join(', ')}\n`);
};

function filtrarParticipantes(participantes) {
  return participantes.filter(participante => participante.idade >= 18);
};

function nomearParticipantes(participantes) {
  return participantes.map(participante => participante.nome);
};