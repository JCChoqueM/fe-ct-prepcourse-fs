function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  /*   return numeros.reduce((previousValue, currentValue, currentIndex, array) => {
    if (currentValue % 2 === 0) {
      return previousValue + 1;
    }
    return previousValue;
  }, 0); */
  /*  let valor = numeros.reduce((previousValue, currentValue, currentIndex, array) => {
    if (currentValue % 2 === 0) {
      return previousValue + 1;
    }
    return previousValue;
  }, 0);
  return valor; */
  /*   cantidadPares = 0;
  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if (element % 2 !== 0) {
      continue;
    }
    cantidadPares += 1;
  }
  return cantidadPares; */

  /*   return numeros.filter((element) => element % 2 === 0).length */

  let otroArray = [];
  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if (element % 2 !== 0) {
      continue;
    }
    otroArray.push(element);
  }
  console.log('El array:', numeros, 'tiene:', otroArray.length, 'pares');

  return otroArray.length;
}
contarParesConContinue([]);
contarParesConContinue([1, 3, 5]);
contarParesConContinue([1, 2, 3, 4, 5, 6]);
contarParesConContinue([2, 4, 6, 8]);
module.exports = contarParesConContinue;
