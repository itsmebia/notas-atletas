// DADOS A SEREM EXIBIDOS
const atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];
// =============================================================
// FUNÇÕES E LÓGICA

const calcularMediaValida = (notas) => {
    const notasOrdenadas = notas.slice().sort((a, b) => a - b);
    const notasValidas = notasOrdenadas.slice(1, 4);

    // SOMA TOTAL
    const somaNotasValidas = notasValidas.reduce((soma, nota) => soma + nota, 0);

    // MÉDIA
    return notasValidas.length > 0 ? somaNotasValidas / notasValidas.length : 0;
};

const processarAtleta = (atleta) => {
    const { nome, notas } = atleta;

    const mediaValida = calcularMediaValida(notas);

    const notasString = notas.join(',');

    const mediaFormatada = mediaValida.toLocaleString('pt-BR', { maximumFractionDigits: 10 });

    return `Atleta: ${nome}
Notas Obtidas: ${notasString}
Média Válida: ${mediaFormatada}\n\n`;
};

const processarCompeticao = (dadosAtletas) => {
    console.log('--- Resultados da Competição de Ginástica Artística ---');

    const resultados = dadosAtletas.map(processarAtleta).join('');
    console.log(resultados);
    console.log('-------------------------------------------------------');
};

processarCompeticao(atletas);
