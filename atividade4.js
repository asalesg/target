function calcularPercentuais(faturamentos) {
    // Calcula o valor total
    const valorTotal = Object.values(faturamentos)
        .reduce((total, valor) => total + valor, 0);
    
    // Calcula o percentual para cada estado
    const percentuais = {};
    for (const [estado, valor] of Object.entries(faturamentos)) {
        const percentual = (valor / valorTotal) * 100;
        percentuais[estado] = percentual;
    }
    
    return {
        percentuais,
        valorTotal
    };
}

// Dados de faturamento por estado
const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

const resultado = calcularPercentuais(faturamentoPorEstado);

// Exibe os resultados
console.log('Percentual de representação por estado:');
for (const [estado, percentual] of Object.entries(resultado.percentuais)) {
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
console.log(`\nValor total: R$ ${resultado.valorTotal.toFixed(2)}`);