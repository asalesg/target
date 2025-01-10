function inverterString(str) {
    var novaString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

var minhaString = "Olá, mundo!";
var stringInvertida = inverterString(minhaString);
console.log(stringInvertida); // Saída: "!odnum ,álO"

// Esta função:
// 1. Recebe uma string como parâmetro (str)
// Cria uma variável vazia novaString para armazenar o resultado
// Usa um loop que:
// Começa do último caractere (str.length - 1)
// Vai até o primeiro caractere (índice 0)
// Adiciona cada caractere na novaString
// Retorna a string invertida
// Exemplo de Uso
// Neste exemplo:
// A string original é "Olá, mundo!"
// A função inverte a string
// O resultado é "!odnum ,álO"
// Como Funciona na Prática
// Vamos ver passo a passo como a string "Olá, mundo!" é invertida:
// Começa do último caractere ("!")
// Vai adicionando cada caractere na ordem inversa
// Processo: "!" → "!o" → "!od" → "!odn" → "!odnu" → "!odnum" → "!odnum " → "!odnum," → "!odnum ,á" → "!odnum ,ál" → "!odnum ,álO"
// Uso Prático
// Este código é útil para:
// Jogos de palavras
// Verificação de palíndromos
// Exercícios de manipulação de strings
// Tarefas que necessitam inverter textos
// É um exemplo simples mas eficaz de manipulação de strings em JavaScript, frequentemente usado em exercícios de programação e situações onde é necessário inverter textos.