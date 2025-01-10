function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  /*  if (a < 0 && b < 0) {
    if (a == b) {
      return true;
    }else{
      return false
    }
  } else {
    return false;
  } */
  return a < 0 && b < 0 && a == b ? true : false;
}

module.exports = esIgualYNegativo;
