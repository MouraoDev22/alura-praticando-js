const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

enviarNotificacoes(mensagens);

function enviarNotificacoes(mensagens) {
    console.log('');
    mensagens.forEach(mensagem => {
        console.log(`Notificação: ${mensagem}`);
    });
    console.log('');
};