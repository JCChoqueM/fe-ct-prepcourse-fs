/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let objeto = {};
  let arrayString = [...string];
  let ordenadoReducido = [...new Set(string)].sort();
  for (const element of ordenadoReducido) {
    objeto[element] = arrayString.filter((value) => value == element).length;
  }
  return objeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayusculas = '';
  let minusculas = '';
  for (const char of string) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      mayusculas += char;
    } else {
      minusculas += char;
    }
  }
  return mayusculas + minusculas;
  /*  let mayusculas = '';
  let minusculas = '';

  // Iteramos a través de la cadena para separar las mayúsculas y minúsculas
  for (let char of str) {
    if (char === char.toUpperCase()) {
      mayusculas += char; // Guardamos las mayúsculas
    } else {
      minusculas += char; // Guardamos las minúsculas
    }
  }
  // Retornamos el string con las mayúsculas primero y luego las minúsculas
  return mayusculas + minusculas; */
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let respuesta = [];
  let arrayFrase = frase.split(' ');
  for (const element of arrayFrase) {
    respuesta.push(Array.from(element).reverse().join(''));
  }
  return respuesta.join(' ');
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let inverso = parseInt(numero.toString().split('').reverse().join(''));
  if (inverso === numero) {
    return 'Es capicua';
  }
  return 'No es capicua';
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  /* return string.replace(/[abc]/g, ''); */
  let eliminar = ['a', 'b', 'c'];
  let resultado = '';
  for (const char of string) {
    if (!eliminar.includes(char)) resultado += char;
  }
  return resultado;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  let valores = [];
  for (const valor of arrayOfStrings) {
    valores.push(valor.length);
  }
  let valoresReducido = [...new Set(valores)].sort();
  console.log('valoresReducido:', valoresReducido);
  let ordenado = [];
  for (const elemento of valoresReducido) {
    for (const elementoArray of arrayOfStrings) {
      if (elemento == elementoArray.length) {
        ordenado.push(elementoArray);
        console.log('Ordenado:', ordenado);
      }
    }
  }
  return ordenado;
}
sortArray(['You', 'are', 'beautiful', 'looking']);

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  let enComun = [];
  for (const element of array1) {
    if (array2.includes(element)) {
      enComun.push(element);
    }
  }
  return enComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
