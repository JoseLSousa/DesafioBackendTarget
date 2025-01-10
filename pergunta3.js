const fs = require('fs');

function CalcularFaturamento(faturamentoMensal) {
    let faturamentoValido = [];


    faturamentoValido = faturamentoMensal.filter(valor => valor !== 0);


    const faturamentoMaximo = Math.max(...faturamentoValido);
    const menorFaturamento = Math.min(...faturamentoValido);


    const faturamentoMensalTotal = faturamentoValido.reduce((a, b) => a + b, 0);
    const mediaMensal = (faturamentoMensalTotal / faturamentoValido.length).toFixed(2);


    const diasAcimaMedia = faturamentoMensal.filter(dia => dia > mediaMensal).length;

    // Retorna os resultados
    return {
        menorFaturamento,
        faturamentoMaximo,
        diasAcimaMedia,
        mediaMensal
    };
}


fs.readFile('faturamento.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo JSON:", err);
        return;
    }


    const { faturamentoMensal } = JSON.parse(data);

    const resultados = CalcularFaturamento(faturamentoMensal);

    // Exibe os resultados
    console.log(`Menor faturamento: R$${resultados.menorFaturamento}`);
    console.log(`Maior faturamento: R$${resultados.faturamentoMaximo}`);
    console.log(`Dias com faturamento acima da média: ${resultados.diasAcimaMedia}`);
    console.log(`Média mensal: R$${resultados.mediaMensal}`);
});
