// Você está criando um sistema de autenticação de usuários para um site. O sistema deve verificar se o usuário digitado é "admin". Se o usuário for "admin", o login será bem-sucedido e será exibida a mensagem "Login bem-sucedido!". Caso contrário, o sistema deve exibir "Usuário inválido."

// Crie um programa utilizando o operador ternário que realize essa verificação e exiba a mensagem correspondente.

import prompt from 'nprompt';

const usuariosValidos = ['admin', 'gestor', 'editor'];
const usuario = await prompt('Digite o nome de usuário: ');
const mensagem = verificarLogin(usuario, usuariosValidos);
console.log(mensagem);

function verificarLogin(usuario, usuariosValidos) {
    return usuariosValidos.includes(usuario) ? 'Login bem-sucedido!' : 'Usuário inválido.';
};