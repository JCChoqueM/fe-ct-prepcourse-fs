function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  /*   let tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(num + i * 2);
    if (tabla[i - 1] == i) {
      console.log("Se interrumpio",tabla)
      return 'Se interrumpió la ejecución';
    }
  }
  console.log(tabla)
  return tabla; */
  let array = [];
  for (let i = 0; i < 10; i++) {
    num += 2;
    array.push(num);
    if (num === i) break;
  }
  console.log(array);
  return array.length === 10 ? array : 'Se interrumpió la ejecución';
}
breakStatement(50);
breakStatement(-4);
module.exports = breakStatement;
