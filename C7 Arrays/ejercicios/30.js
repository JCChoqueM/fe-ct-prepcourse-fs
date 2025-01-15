function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
 /*  for (let i = 0; i < numeros.length; i++) {
    let aux = numeros.filter((value) => value == numeros[i]);
    if (aux.length > 1) {
      return numeros[i];
    }
  } */

  for (let i = 0; i < numeros.length; i++) {
    if (numeros.filter((value) => value == numeros[i]).length > 1) {
      return numeros[i];
    }
  }
}

module.exports = encontrarElementoRepetido;
