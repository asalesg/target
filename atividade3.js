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

// Vou explicar o código em detalhes:
// Explicação da Função Principal
// A função analisarFaturamento analisa dados de faturamento diário e calcula algumas estatísticas importantes. Vamos dividir em partes:
// Filtro de Dias com Faturamento:
// - Remove os dias sem faturamento (valor zero)
// Considera apenas dias úteis ou com vendas
// Cálculos Principais:
// - Encontra o menor valor de faturamento
// Encontra o maior valor de faturamento
// Calcula a média mensal de faturamento
// Análise de Desempenho:
// - Conta quantos dias tiveram faturamento superior à média mensal
// Dados de Exemplo
// O código inclui um array de exemplo faturamento com 31 valores, representando o faturamento diário de um mês. Os zeros representam dias sem faturamento (possivelmente finais de semana ou feriados).
// Saída
// O código imprime três informações principais:
// O menor valor de faturamento do mês
// O maior valor de faturamento do mês
// Quantidade de dias em que o faturamento foi superior à média mensal
// Uso Prático
// Este código é útil para:
// Análise de desempenho financeiro
// Identificação de picos e vales de faturamento
// Avaliação da consistência das vendas ao longo do mês
// Identificação de quantos dias superaram a média, o que pode ajudar na definição de metas
// É um exemplo de análise estatística básica aplicada a dados financeiros, comum em sistemas de gestão empresarial.