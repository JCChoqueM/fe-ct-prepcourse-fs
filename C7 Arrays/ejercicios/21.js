function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  /*   let nuevoArray = [];
  array.forEach((value, index, array) => {
    if (value === 'Enero' || value === 'Marzo' || value == 'Noviembre') {
      nuevoArray.push(value);
    }
  });
  return nuevoArray.length === 3 ? nuevoArray : 'No se encontraron los meses pedidos'; */
  /*   let nuevoArray = array.filter((value, index, array) => value === 'Enero' || value === 'Marzo' || value == 'Noviembre');
  return nuevoArray.length === 3 ? nuevoArray : 'No se encontraron los meses pedidos';
 */
  /*   let nuevoArray = [];
  let buscar = ['Enero', 'Marzo', 'Noviembre'];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (buscar.includes(element)) {
      nuevoArray.push(element);
    }
  }
  return nuevoArray.length === 3 ? nuevoArray : 'No se encontraron los meses pedidos'; */
  let nuevoArray = [];
  let buscar = ['Enero', 'Marzo', 'Noviembre'];
  array.forEach((value) => {
    if (buscar.includes(value)) {
      nuevoArray.push(value);
    }
  });
  return nuevoArray.length === 3 ? nuevoArray : 'No se encontraron los meses pedidos';
}

module.exports = mesesDelAño;
