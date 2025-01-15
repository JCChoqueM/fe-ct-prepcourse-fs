function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
 /*  let array = [];
  for (let i = 1; i <= 10; i++) {
    if (i == 5) {
      continue;
    }
    array.push((num += 2));
  }
  console.log(array);
  return array; */
  let array = [];
  for (let i = 0; i < 10; i++) {
    if (i === 4) continue;
    num += 2;
    array.push(num);
  }
  return array;
}
continueStatement(50);
continueStatement(-4);
module.exports = continueStatement;
