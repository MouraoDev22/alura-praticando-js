// Você é analista de segurança da informação em uma empresa e precisa validar a senha digitada por um novo usuário. Sua tarefa é mostrar, caractere por caractere, todos os símbolos digitados, para garantir que nada foi escondido.

// Como você pode percorrer e exibir todos os caracteres de uma senha digitada, um por um?

const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let senha = prompt("Digite sua senha:");
senha = verificarEntrada(senha);

exibirCaracteresDaSenha(senha);

function verificarEntrada(senha) {
    while (senha.length === 0 || !regex.test(senha)) {
        senha = prompt("Entrada inválida. Por favor, digite uma senha válida, com pelo menos 8 caracteres, incluindo letras e números: ");
    }
    return senha;
}

function exibirCaracteresDaSenha(senha) {
    console.log("Caracteres da senha digitada:");
    for (let i = 0; i < senha.length; i++) {
        console.log(`Caractere ${i + 1}: ${senha[i]}`);
    }
}