// Você está criando um painel de configurações para um aplicativo. As configurações são armazenadas em um objeto e você precisa acessar informações específicas para exibição.

// Escreva um programa que:

// . Crie um objeto configuracoes com as propriedades de tema, notificacoes, idioma.
// . Acesse tema usando notação de ponto.
// . Acesse idioma usando notação de colchetes.
// . Exiba os dois valores no console.

const configuracoes = {
    tema: 'dark',
    idioma: 'pt-BR',
    notificacoes: true,
    exibirConfig: function(...keys) {
        console.log('');
        for (const key of keys) {
            if (this.hasOwnProperty(key.toLowerCase())) {
                console.log(`${key[0].toUpperCase() + key.slice(1)}: ${this[key.toLowerCase()]}`);
            } else {
                console.log(`\n"${key}" não existe nas configurações.\n`);
            };
        };
        console.log('');
        return;
    },
};

configuracoes.exibirConfig('tema', 'idioma');