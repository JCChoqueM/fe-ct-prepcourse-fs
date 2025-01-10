function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  //añadir validaciones del los tipos de datos

  if (typeof x !== "number" || typeof y !== "number") {
    return "No es un número";
  } else if (x === y) {
    return x;
  } else if (x > y) {
    return x;
  } else {
    return y;
  }

}

module.exports = obtenerMayor;
