function analisarFaturamento(faturamentoDiario) {
    // Filtra dias sem faturamento (zero ou null)
    const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);
    
    // Calcula o menor valor
    const menorValor = Math.min(...diasComFaturamento);
    
    // Calcula o maior valor
    const maiorValor = Math.max(...diasComFaturamento);
    
    // Calcula a média mensal
    const mediaMensal = diasComFaturamento.reduce((acc, curr) => acc + curr, 0) / diasComFaturamento.length;
    
    // Conta dias acima da média
    const diasAcimaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;
    
    return {
        menorValor,
        maiorValor,
        diasAcimaMedia
    };
}

// Exemplo de uso:
const faturamento = [
    1000, 1500, 2000, 0, 1800, 1200, 0,
    1900, 2200, 1600, 1700, 1400, 0,
    2100, 1800, 1900, 2000, 2300, 0,
    1700, 1600, 1800, 1900, 2100, 0,
    2000, 1800, 1900, 2200, 2500, 1900
];

const resultado = analisarFaturamento(faturamento);
console.log(`Menor valor de faturamento: R$ ${resultado.menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${resultado.maiorValor.toFixed(2)}`);
console.log(`Dias acima da média: ${resultado.diasAcimaMedia}`); 