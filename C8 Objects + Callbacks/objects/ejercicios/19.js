function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  /*   console.log(objetoMuchosUsuarios);
  for (const element of objetoMuchosUsuarios) {
    element.esPremium = true;
  }
  console.log(objetoMuchosUsuarios);
  return objetoMuchosUsuarios */
  return objetoMuchosUsuarios.map((user) => ({ ...user, esPremium: true }));
}

module.exports = pasarUsuarioAPremium;
