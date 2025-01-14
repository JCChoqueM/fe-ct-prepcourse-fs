function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce((previousValue, currentValue, currentIndex, array) => previousValue+currentValue, 0)
}

module.exports = agregarNumeros;
