// Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.

// Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.

let nota1 = Number(prompt("Digite a primeira nota:"))
nota1 = verificarEntrada(nota1);

let nota2 = Number(prompt("Digite a segunda nota:"))
nota2 = verificarEntrada(nota2);

const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;
const media = calcularMedia(nota1, nota2).toFixed(1);

console.log(`A média das notas é: ${media}`);

function verificarEntrada(nota) {
    let notaNova = nota;
    while (isNaN(notaNova) || notaNova < 0 || notaNova> 10 || !notaNova) {
       notaNova = Number(prompt("Nota inválida. Por favor, digite uma nota válida:"));
    };
    return notaNova;
};