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

// Explicação do Código
// Função calcularPercentuais:
// Esta função:
// Recebe um objeto com os faturamentos por estado
// Calcula o valor total somando todos os faturamentos
// Calcula o percentual que cada estado representa do total
// Retorna um objeto com os percentuais e o valor total
// Dados de Entrada:
// - Define um objeto com o faturamento de cada estado
// Inclui SP, RJ, MG, ES e outros estados
// Exibição dos Resultados:
// - Chama a função com os dados
// Imprime o percentual de cada estado formatado com 2 casas decimais
// Imprime o valor total também formatado
// Uso Prático
// Este código é útil para:
// Análise de distribuição de faturamento por região
// Identificação dos estados mais representativos nas vendas
// Relatórios financeiros regionais
// Tomada de decisões estratégicas baseadas na participação de cada estado
// É um exemplo comum em sistemas de análise de vendas e relatórios gerenciais, onde é importante entender a contribuição de cada região para o faturamento total da empresa.