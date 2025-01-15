function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  console.log(arr, ':', typeof arr);
  console.log(arr, ' es array?:', Array.isArray(arr));
  console.log(arr, ' tiene mas de un elemento?:', arr.length >= 1);
  console.log(arr, ' Cantidad de elemento:', arr.length);
  console.log('respuesta:', Array.isArray(arr) && arr.length >= 1);
  console.log('....................');
  return Array.isArray(arr) && arr.length >= 1;
}
esArrayNoVacio([1, 2, 3]);
esArrayNoVacio([]);
esArrayNoVacio('not an array');
module.exports = esArrayNoVacio;
