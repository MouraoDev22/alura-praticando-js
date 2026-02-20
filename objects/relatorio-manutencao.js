// Você está desenvolvendo um sistema de manutenção preventiva para uma indústria. Cada máquina registra os meses em que passou por manutenção ao longo do ano, armazenando a quantidade de dias parados em um objeto, onde cada chave representa um mês e o valor representa os dias de inatividade.

// Agora, o sistema precisa gerar um relatório que exiba:

// . O total de dias parados no ano.
// . A quantidade de meses com manutenção (ou seja, com valor maior que zero).
// . Um alerta caso o total de dias parados seja maior que 20 dias: Status: Atenção! Acima do limite anual. ou Status: Dentro do limite anual.

const diasParadosPorMes = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7,
  jul: 0,
  ago: 0,
  set: 2,
  out: 3,
  nov: 0,
  dez: 0
};

exibirRelatorioManutencao(diasParadosPorMes);

function exibirRelatorioManutencao(diasParadosPorMes) {
    const totalDiasParados = Object.values(diasParadosPorMes).reduce((total, dias) => total + dias, 0);
    const totalMesesComParada = Object.values(diasParadosPorMes).filter(dias => dias > 0).length;
    const isDentroDoLimite = totalDiasParados <= 20;
    
    console.log('\nRelatório de manutenção:\n')
    console.log(`Total de dias parados: ${totalDiasParados}`);
    console.log(`Total de meses com manutenção registrada: ${totalMesesComParada}`);
    console.log(`Status: ${isDentroDoLimite ? 'Dentro do limite anual\n' : 'Atenção! Acima do limite anual\n'}`);
    return;
};