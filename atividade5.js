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
