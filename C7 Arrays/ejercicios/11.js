function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
/*   array.forEach((value, index, array) => {
    array[index]*=2
  })
  return array */
  return array.map((value, index, array) => value*2)
}

module.exports = duplicarElementos;
