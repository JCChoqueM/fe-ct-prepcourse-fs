function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo:
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  /*  if (num === 0) {
    return false;
  }
  if (num>0) {
    return "Es positivo"
  }else{
    return "Es negativo"
  } */
  switch (true) {
    case num === 0:
      return false;
      break;
    case num > 0:
      return 'Es positivo';
      break;
    case num < 0:
      return 'Es negativo';
      break;

    default:
      break;
  }
}

module.exports = esPositivo;
