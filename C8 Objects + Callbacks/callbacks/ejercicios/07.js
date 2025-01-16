function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  /*   console.log(arrayOfStrings);
  let nuevoArreglo = [];
  for (const element of arrayOfStrings) {
    if (element[0] == 'a') {
      nuevoArreglo.push(element);
    }
  }
  console.log(nuevoArreglo);
  return nuevoArreglo; */
  let nuevoArreglo = [];
  arrayOfStrings.forEach((value, index, array) => {
    if (value[0] == 'a') {
      nuevoArreglo.push(value);
    }
  });
  return nuevoArreglo
}
filter(['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo']);
module.exports = filter;
