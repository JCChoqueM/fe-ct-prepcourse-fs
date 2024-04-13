function buscarPosiciones(numero, array) {
  var posiciones = "";
  var encontrado = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === numero) {
      if (posiciones !== "") {
        posiciones += ", ";
      }
      posiciones += i;
      encontrado = true;
    }
  }
  if (!encontrado) {
    return "El número no fue encontrado en el array.";
  }
  return posiciones;
}

// Ejemplo de uso
var numeros = [1, 2, 3, 2, 4, 2, 5];
var numeroBuscado = 2;
var posiciones = buscarPosiciones(numeroBuscado, numeros);
console.log(posiciones);
