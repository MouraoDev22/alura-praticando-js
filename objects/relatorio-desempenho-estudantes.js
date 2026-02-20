// Você está finalizando o back-end de uma plataforma de cursos online. Cada curso possui uma lista de estudantes com seus respectivos dados de progresso. Sua tarefa é construir um relatório que mostre o desempenho geral da turma.

// Você deve escrever um programa que:

// 1. Crie um objeto chamado curso, com as seguintes propriedades:
//   . titulo: string com o nome do curso;
//   . estudantes: um array de objetos, cada um com nome e progresso (número de 0 a 100);
//   . Um método interno chamado gerarRelatorio.

// 2. O método gerarRelatorio deve:
//   . Percorrer o array de estudantes;
//   . Exibir no console o nome de cada estudante e sua situação:
//     . Se o progresso for igual ou maior que 70, mostrar "Aprovado";
//     . Senão, mostrar "Em andamento";
//   . Ao final, mostrar:
//     . A quantidade total de estudantes;
//     . A média geral de progresso da turma.

const curso = {
    titulo: 'JavaScript: Aprendendo a Programar',
    estudantes: [
        { nome: 'Pedro', progresso: 90 },
        { nome: 'Maria', progresso: 50 },
        { nome: 'João', progresso: 100 },
        { nome: 'Ana', progresso: 80 },
        { nome: 'Carlos', progresso: 70 }
    ],
    gerarRelatorioTurma: function() {
        console.log(`\nCurso: ${this.titulo}`);
        console.log('Estudantes:\n');
        
        this.estudantes.forEach(estudante => {
            console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${estudante.progresso >= 70 ? 'Aprovado' : 'Em andamento'}`);
        });
        console.log('');

        console.log(`Total de estudantes: ${this.estudantes.length}`);
        this.gerarMediaTurma();
        console.log('');
        return;
    },
    gerarMediaTurma: function() {
        const totalProgresso = this.estudantes.reduce((total, estudante) => total + estudante.progresso, 0);
        const mediaProgresso = totalProgresso / this.estudantes.length;

        console.log (`Média geral da turma: ${mediaProgresso.toFixed(2)}%`);
    }
};

curso.gerarMediaTurma();