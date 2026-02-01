const regex = /^[A-Za-zÀ-ú\s]+$/;
const nome = prompt("Digite seu nome:");

saudacao(nome);

function saudacao(nome) {
    regex.test(nome) 
    ? console.log(`Olá, ${nome}! Bem vindo(a)!`) 
    : console.log("Olá! Bem vindo(a)!")
};