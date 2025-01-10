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

// Certainly! I'll explain the selected code for you:

// 1. The code defines two functions: `isFibonacciNumber` and`checkFibonacci`.

// 2. `isFibonacciNumber(num)` function:
//    - This function checks if a given number is part of the Fibonacci sequence.
//    - It initializes variables `a = 0` and`b = 1`, which are the first two numbers in the Fibonacci sequence.
//    - It calculates the next Fibonacci number as `next = a + b`.
// - It uses a while loop to generate Fibonacci numbers until `next` is greater than the input`num`.
//    - If at any point `next` equals`num`, it returns`true`, indicating that the number is in the Fibonacci sequence.
//    - If the loop completes without finding a match, it returns`false`.

// 3. `checkFibonacci(num)` function:
//    - This function uses `isFibonacciNumber` to check if a number is in the Fibonacci sequence.
//    - It then logs a message to the console stating whether the number belongs to the Fibonacci sequence or not.

// 4. The code then defines two constants:
// - `numero = 13`
//   - `numero2 = 14`

// 5. Finally, it calls `checkFibonacci` for both`numero` and`numero2`:
//   - For 13, it will output: "13 pertence à sequência de Fibonacci."(13 belongs to the Fibonacci sequence)
//     - For 14, it will output: "14 não pertence à sequência de Fibonacci."(14 does not belong to the Fibonacci sequence)

// This code effectively demonstrates how to check if a given number is part of the Fibonacci sequence and provides a user - friendly way to display the result.