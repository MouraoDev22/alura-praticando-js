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
        if (keys.length === 0) {
            keys = Object.keys(this);
            console.log('');
            for (const key of keys) {
                if (typeof this[key] === 'function') continue;
                if (this[key] === undefined) continue;
                
                console.log(`${key[0].toUpperCase() + key.slice(1)}: ${this[key.toLowerCase()]}`);
            };
            console.log('');
            return;
        };
       
        console.log('');
        for (const key of keys) {
            if (this.hasOwnProperty(key.toLowerCase())) {
                console.log(`${key[0].toUpperCase() + key.slice(1)}: ${this[key.toLowerCase()]}`);
            } else {
                console.log(`"${key}" não existe nas configurações.`);
            };
        };
        console.log('');
        return;
    },
};

configuracoes.exibirConfig('exibirConfig');