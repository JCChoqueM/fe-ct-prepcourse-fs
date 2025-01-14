function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  /*  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element.length);
    if (element.length >= 5) {
      return element;
    }
  } */
  return array.find((element) => element.length >= 5);
}
obtenerPrimerStringLargo(['this', 'string']);
module.exports = obtenerPrimerStringLargo;
