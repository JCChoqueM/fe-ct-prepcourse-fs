function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  /* let mayor=-Infinity;
  let indice=0;
  array.forEach((value, index, array) => {
    if (value > mayor) {
      mayor = value;
      indice = index;
    }
  });
  return indice; */
/*   if (array.length === 0) return 0;
  return array.indexOf(Math.max(...array)); */
  // Si el array está vacío, devolver 0
  return array.reduce((acc, value, index, array) => value > array[acc] ? index : acc, 0)
}
module.exports = encontrarIndiceMayor;
