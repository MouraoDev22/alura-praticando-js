// Você está criando um painel para um sistema de chamada escolar. Você recebeu uma lista com os nomes das pessoas estudantes de uma turma e precisa exibir um por um para fazer a chamada em sala. Escreva um programa que:

// . Crie um array com os nomes das pessoas.
// . Use o for...of para exibir cada nome individualmente.

const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz', 'Rafael', 'Fernanda', 'Gustavo', 'Ana', 'Pedro'];

for (let estudante of estudantes) {
    console.log('');
    console.log(`Estudante: ${estudante}`);
    console.log('');
};