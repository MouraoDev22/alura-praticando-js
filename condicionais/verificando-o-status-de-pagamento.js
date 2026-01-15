// Você está criando um sistema de verificação de status de pagamento de clientes. Dependendo do status, o sistema deve exibir uma mensagem apropriada:

// . Se o status for "pendente", exibe: "Pagamento pendente".
// . Se o status for "aprovado", exibe: "Pagamento aprovado".
// . Se o status for "recusado", exibe: "Pagamento recusado".

// Use o switch/case para criar um programa que faça essa verificação e mostre a mensagem correspondente ao status do pagamento.

const comprasPendentes = ["compra01", "compra02", "compra03"];
const comprasAprovadas = ["compra04", "compra05"];
const comprasRecusadas = ["compra06", "compra07"];

let promptResposta = prompt("Qual compra deseja verificar? (compra[número] ex: compra01): ").toLowerCase();
promptResposta = verificarEntrada(promptResposta);

const resultado = verificarStatusPagamento(promptResposta);
console.log(resultado);

function verificarEntrada(promptResposta) {
    while (!comprasPendentes.includes(promptResposta) && !comprasAprovadas.includes(promptResposta) && !comprasRecusadas.includes(promptResposta)) {
        promptResposta = prompt("Compra inválida. Qual compra deseja verificar? (compra[número] ex: compra01): ").toLowerCase();
    }
    return promptResposta;
}

function verificarStatusPagamento(compra) {
    switch (true) {
        case comprasPendentes.includes(compra):
            return "Pagamento pendente.";
            break;
        case comprasAprovadas.includes(compra):
            return "Pagamento aprovado.";
            break;
        case comprasRecusadas.includes(compra):
            return "Pagamento recusado.";
            break;
        default:
            return "Status de pagamento inválido.";
    }
}