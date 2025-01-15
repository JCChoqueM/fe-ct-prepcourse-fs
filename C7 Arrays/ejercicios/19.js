function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  console.log(Array.isArray(arguments));
  console.log(typeof(arguments));
}
multiplicarArgumentos(5, 5);
multiplicarArgumentos();
multiplicarArgumentos(3, 3, 3, 3);
multiplicarArgumentos(1);
multiplicarArgumentos(10, 0, 10);
multiplicarArgumentos();
module.exports = multiplicarArgumentos;
