function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  console.log(palabras);
  console.log(palabras.join(' '));
  return palabras.join(' ');
}
dePalabrasAFrase(['Henry', 'JavaScript', 'Class']);
module.exports = dePalabrasAFrase;
