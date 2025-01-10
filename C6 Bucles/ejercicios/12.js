function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  switch (true) {
    case num % 3 === 0 && num % 5 === 0:
      return 'fizzbuzz';
    case num % 3 === 0:
      return 'fizz';
    case num % 5 === 0:
      return 'buzz';
    default:
      return false;
  }
}

module.exports = fizzBuzz;
