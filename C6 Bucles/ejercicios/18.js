function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto *= i;
    console.log(producto)
  }
  return producto || 0;
}
console.log(productoEntreNúmeros(-5,5))
module.exports = productoEntreNúmeros;
