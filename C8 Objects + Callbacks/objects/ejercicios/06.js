const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  /*   return Object.values(objeto).length */
/*   let contador = 0;
  for (const key in objeto) {
    if (Object.prototype.hasOwnProperty.call(objeto, key)) {
      const element = objeto[key];
      contador++
    }
  }
  return contador */
  let contador=0
  for (const key in objeto) {
  contador++
  }
  return contador
};

module.exports = contarPropiedades;
