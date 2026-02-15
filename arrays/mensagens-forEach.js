const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

enviarNotificacoes(mensagens);

function enviarNotificacoes(mensagens) {
    mensagens.forEach(mensagem => {
        console.log(`Notificação: ${mensagem}`);
    });
};