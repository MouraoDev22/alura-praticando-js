const dispositivos = [
    {
        nome: 'Impressora',
        isAtivo: true
    },
    {
        nome: 'Scanner',
        isAtivo: false
    },
    {
        nome: 'Projetor',
        isAtivo: true
    },
    {
        nome: 'Webcam',
        isAtivo: false
    },
    {
        nome: 'Monitor',
        isAtivo: true
    }
];

exibirDispositivos(dispositivos);

function exibirDispositivos(dispositivos) {
    console.log('');
    for (const dispositivo of dispositivos) {
        console.log(`Nome: ${dispositivo.nome} | Status: ${dispositivo.isAtivo ? 'Ativo' : 'Inativo'}`);
    };
    console.log('');
    return;
};