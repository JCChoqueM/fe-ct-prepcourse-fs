function sort(sortBy, list) {
  // La función sort recibe dos parámetros:
  // sortBy: una letra (string).
  // list: un arreglo de objetos.
  // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
  // a partir de la letra recibida. Por ejemplo:
  // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
  // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
  // Tu código:
/*   const valoresA = [...new Set(list.map((value) => value[sortBy]))].sort((a, b) => b - a);
  const retorna = [];
  for (let i = 0; i < valoresA.length; i++) {
    for (const value of list) {
      if (value[sortBy] === valoresA[i]) {
        retorna.push(value);
      }
    }
  }
  console.log(retorna);
  return retorna; */
  const sortedList = list.sort((a, b) => b[sortBy] - a[sortBy]);

  // Devolver la lista ordenada
  return sortedList;
}

module.exports = sort;
