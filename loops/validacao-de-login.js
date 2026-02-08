// Você está desenvolvendo o sistema de login de um app interno da empresa. O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes. Se digitar certo, exibe uma mensagem de acesso permitido. Se errar 3 vezes, bloqueia o acesso.

// Seu desafio é escolher o laço de repetição mais adequado para resolver este problema.

import prompt from 'nprompt';

const tentativas = ['1234', 'admin', 'secreto', 'senha', '12345'];
const senhaCorreta = 'secreto';
let tentativasRestantes = 3;

let senhaInformada = await prompt(`Digite sua senha, dentre as opções: '1234', 'admin', 'secreto', 'senha', '12345', você tem ${tentativasRestantes} tentativas:`);
await verificarSenha(senhaInformada);

async function verificarSenha(senhaInformada) {
    if (senhaInformada === senhaCorreta) {
        console.log('Acesso permitido.');
        return;
    } else {
        for (let i = 0; i < tentativasRestantes; i++) {
            tentativasRestantes--;
            senhaInformada = await prompt(`Senha incorreta. Tente novamente, você tem ${tentativasRestantes} tentativas:`);
            if (senhaInformada === senhaCorreta) {
                console.log('Acesso permitido.');
                return;
            }
        }
        console.log('Acesso bloqueado.');
    };
};