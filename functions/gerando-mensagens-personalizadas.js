const regex = /^[A-Za-zÀ-ú\s]+$/;
const nome = prompt("Digite seu nome:");

saudacao(nome);

function saudacao(nome) {
    if (regex.test(nome)) {
        console.log(`Olá, ${nome}! Bem vindo(a)!`);
    } else {
        console.log("Olá! Bem vindo(a)!");
    };
};