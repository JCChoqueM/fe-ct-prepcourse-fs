//funcion para añadir un valor a un array
function push(array, value) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }
    newArray[newArray.length] = value;
    return array;
}
array = [1,2];
console.log("antes de hacer el cambio",array)
push(array,"nuevo alumno: mokis")
console.log("despues del cambio",array)
push(array,"nuevo alumno: zadir")
console.log("despues del cambio",array)