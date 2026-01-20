// Você está desenvolvendo um sistema para controlar o horário de funcionamento de uma loja. Durante a semana, a loja abre das 9h às 18h, mas aos sábados e domingos, ela abre em horário especial, das 10h às 14h.

// Crie um programa que, dado o dia da semana em formato numérico:

// 0: Domingo
// 1: Segunda-feira
// 2: Terça-feira
// 3: Quarta-feira
// 4: Quinta-feira
// 5: Sexta-feira
// 6: Sábado

// Verifique se a loja está aberta e qual o horário de funcionamento.

// Se for sábado (6) ou domingo (0), a loja estará aberta em horário especial.
// Nos outros dias, a loja estará aberta no horário normal.

const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

let diaDaSemana = Number(prompt("Digite o dia da semana (0 para Domingo, 1 para Segunda-feira, ..., 6 para Sábado): "));
diaDaSemana = verificarSeEhNumero(diaDaSemana);

const resultado = verificarHorarioFuncionamento(diaDaSemana, dias);
console.log(resultado);

function verificarSeEhNumero(diaDaSemana) {
    while (isNaN(diaDaSemana) || diaDaSemana < 0 || diaDaSemana > 6) {
        diaDaSemana = Number(prompt("Dia da semana inválido. Por favor, digite um dia da semana válido: "));
    }
    return diaDaSemana;
}

function verificarHorarioFuncionamento(diaDaSemana, dias) {
    return (dias[0] === dias[diaDaSemana] || dias[6] === dias[diaDaSemana]) 
    ? `Hoje é ${dias[diaDaSemana]}. A loja está aberta em horário especial, das 10h às 14h.` 
    : `Hoje é ${dias[diaDaSemana]}. A loja está aberta no horário normal, das 9h às 18h.`;
}