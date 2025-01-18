function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  console.log(objetoUsuario);
  console.log(objetoUsuario.posts.reduce((previousValue, currentValue) => previousValue + currentValue.likes, 0));
  return(objetoUsuario.posts.reduce((previousValue, currentValue) => previousValue + currentValue.likes, 0));
}

module.exports = sumarLikesDeUsuario;
