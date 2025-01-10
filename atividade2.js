function isFibonacciNumber(num) {
  let a = 0;
  let b = 1;
  let next = a + b;

  while (next <= num) {
    if (next === num) {
      return true;
    }
    a = b;
    b = next;
    next = a + b;
  }

  return false;
}

function checkFibonacci(num) {
  if (isFibonacciNumber(num)) {
    console.log(num + " pertence à sequência de Fibonacci.");
  } else {
    console.log(num + " não pertence à sequência de Fibonacci.");
  }
}

const numero = 13; // Saída: 13 pertence à sequência de Fibonacci.
const numero2 = 14; // Saída: 14 não pertence à sequência de Fibonacci.

checkFibonacci(numero);
checkFibonacci(numero2);

