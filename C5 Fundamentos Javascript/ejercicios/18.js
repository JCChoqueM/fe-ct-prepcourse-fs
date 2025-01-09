function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo:
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  /* return letra.length === 1 && ["a", "e", "i", "o", "u"].includes(letra.toLowerCase()) ? "Es vocal" : "Dato incorrecto";
   */
  /* let vocales = ["a", "e", "i", "o", "u"];
let letraMinuscula = letra.toLowerCase();
if (letra.length === 1 && vocales.includes(letraMinuscula)) {
  return "Es vocal";
} else {
  return "Dato incorrecto";
} */
  let vocales = ['a', 'e', 'i', 'o', 'u'];
  let letraMinuscula = letra.toLowerCase();
  return vocales.includes(letraMinuscula) ? 'Es vocal' : 'Dato incorrecto';
}
module.exports = esVocal;
