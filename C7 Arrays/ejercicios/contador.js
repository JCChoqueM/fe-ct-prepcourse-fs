let encuesta = [1, 2, 1, 5, 4, 2, 1, 5, 4, 4];
for (let i = 1; i <= 5; i++) {
  let total = encuesta.filter((value) => value == i).length;
  console.log(`Personas que respondieron ${i}: ${total}`);
}

