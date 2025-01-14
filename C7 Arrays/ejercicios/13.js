function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter((value, index, array) => value % 2 == 0);
}

module.exports = filtrarNumerosPares;
