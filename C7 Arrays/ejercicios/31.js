function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  console.log(texto)
  console.log(Array.from(texto))
  console.log(Array.from(texto).reverse())
  console.log(Array.from(texto).reverse().join(""))
return Array.from(texto).reverse().join("")
}

module.exports = invertirTexto;
