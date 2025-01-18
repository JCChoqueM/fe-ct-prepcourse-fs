function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
 /*  let email=objetoUsuario.email;
if(email){
  console.log(email)
  return true;
}else{
  return false;
} */
 return !!objetoUsuario.email
}

module.exports = tieneEmail;
