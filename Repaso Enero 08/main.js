/*

  Reparar la función de modo que dada una lista de números, devuelva solo los menores que 30
  Todo estaría bien si:
  - Caso 1: Al llamar la función de ésta manera: obtenerMenoresQue30([1, 32, 2, 3]) devuelve un array así: [1,2,3]
  - Caso 2: Al llamar la función de ésta manera: obtenerMenoresQue30([30]) devuelve un array así: []

*/

function obtenerMenoresQue30(numeros) {
  let resultado = [];

  for (let indice = 0; indice < numeros.length; indice++) {
    console.log('indice entrante ' + indice);
    if (numeros[indice] < 30) {
      console.log('indice en el if ' + indice);
      resultado.push(numeros[indice]);
    } 

    console.log('indice saliente ' + indice);

  }

  return resultado;
} 

