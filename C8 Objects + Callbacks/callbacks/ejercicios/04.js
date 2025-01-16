function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   let suma=arrayOfNumbers.reduce((previousValue, currentValue, currentIndex, array) => previousValue+currentValue, 0)
   cb(suma)
}

module.exports = sumarArray;
