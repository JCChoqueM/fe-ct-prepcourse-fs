function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  /*   let maxStr = Math.max(str1.length, str2.length, str3.length);
  let resultado = '';
  for (let i = 0; i < maxStr; i++) {
    if (str1[i] !== undefined) {
      resultado = resultado + str1[i];
    }
    if (str2[i] !== undefined) {
      resultado = resultado + str2[i];
    }
    if (str3[i] !== undefined) {
      resultado = resultado + str3[i];
    }
  }
  return resultado; */
  /*  
  let maxStr = Math.max(str1.length, str2.length, str3.length);
  let resultado = '';
  for (let i = 0; i < maxStr; i++) {
    if (str1[i] !== undefined) resultado = resultado + str1[i];
    if (str2[i] !== undefined) resultado = resultado + str2[i];
    if (str3[i] !== undefined) resultado = resultado + str3[i];
  }
  return resultado; */
  let strings = [str1, str2, str3];
  let maxLength = Math.max(...strings.map((str) => str.length));
  let result = '';

  for (let i = 0; i < maxLength; i++) {
    for (let str of strings) {
      if (str[i] !== undefined) {
        result += str[i];
      }
    }
  }

  return result;
}

module.exports = combine;
