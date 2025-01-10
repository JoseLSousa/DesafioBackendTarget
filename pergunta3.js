const fs = require('fs');

function CalcularFaturamento(dados) {
    const faturamentoValido = dados.filter(dia => dia.valor !== 0).map(dia => dia.valor);

    const faturamentoMaximo = Math.max(...faturamentoValido)
    const menorFaturamento = Math.min(...faturamentoValido)
    const faturamentoMensalTotal = faturamentoValido.reduce((a, b) => a + b, 0)
    const mediaMensal = (faturamentoMensalTotal / faturamentoValido.length).toFixed(2)

    const diasAcimaMedia = faturamentoValido.filter(dia => dia > mediaMensal).length;

    // Retorna os resultados
    return {
        menorFaturamento,
        faturamentoMaximo,
        diasAcimaMedia,
        mediaMensal
    };
}


fs.readFile('dados.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo JSON:", err);
        return;
    }

    const faturamentoMensal = JSON.parse(data);
    const resultados = CalcularFaturamento(faturamentoMensal);

    // Exibe os resultados
    console.log(`Menor faturamento: R$${resultados.menorFaturamento}`);
    console.log(`Maior faturamento: R$${resultados.faturamentoMaximo}`);
    console.log(`Dias com faturamento acima da média: ${resultados.diasAcimaMedia}`);
    console.log(`Média mensal: R$${resultados.mediaMensal}`);
});
