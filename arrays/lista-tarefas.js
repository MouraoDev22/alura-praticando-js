import prompt from 'awt-prompt';

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];
const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

await exibirTarefas(tarefas);

async function exibirTarefas(lista) {
    if (lista.length === 0) {
        console.log('\nSua lista de tarefas está vazia.\n');
        console.log('Deseja adicionar uma nova tarefa ou sair? (Digite "adicionar" ou "sair")\n');
        let acaoSeVazia = await prompt('> ');
        acaoSeVazia = acaoSeVazia.toLowerCase();
        if (acaoSeVazia === 'adicionar') {
            return await adicionarTarefa(lista);
        } else if (acaoSeVazia === 'sair') {
            console.log('\nPrograma encerrado.\n');
            return;
        } else {
            console.log('\nOpção inválida. Por favor, digite "adicionar" ou "sair".');
            return await exibirTarefas(lista);
        };
    };
    console.log('\nSua lista de tarefas:\n');
    lista.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa}`);
    });
    console.log('\nDeseja adicionar uma nova tarefa, remover a última ou sair? (Digite "adicionar", "remover" ou "sair")\n');
    let acao = await prompt('> ');
    acao = acao.toLowerCase();
    switch (acao) {
        case 'adicionar':
            return await adicionarTarefa(lista);
        case 'remover':
            return await removerTarefa(lista);
        case 'sair':
            console.log('\nPrograma encerrado.\n');
            return;
        default:
            console.log('\nOpção inválida. Por favor, digite "adicionar", "remover" ou "sair".');
            return await exibirTarefas(lista);
    };
};

async function adicionarTarefa(lista) {
    console.log('\nDigite a nova tarefa que deseja adicionar:\n');
    let novaTarefa = await prompt('> ');
    novaTarefa = await verificarEntrada(novaTarefa);
    lista.push(novaTarefa);
    console.log(`\nTarefa "${novaTarefa}" adicionada com sucesso!`);
    return await exibirTarefas(lista);
};

async function removerTarefa(lista) {
    if (lista.length === 0) {
        console.log('\nSua lista de tarefas está vazia.\n');
        return await exibirTarefas(lista);
    } else {
        lista.pop();
        console.log('\nÚltima tarefa removida com sucesso!');
        return await exibirTarefas(lista);
    };
};

async function verificarEntrada(entrada) {
    let novaEntrada = entrada;
    while (!regex.test(novaEntrada) || !novaEntrada) {
        console.log('\nEntrada inválida. Por favor, digite apenas letras e espaços, e não deixe em branco.\n');
        novaEntrada = await prompt('> ');
    };
    return novaEntrada;
};
