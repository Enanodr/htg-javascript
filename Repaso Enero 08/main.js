/*

  Reparar la función de modo que dada una lista de números, devuelva solo los menores que 30
  Todo estaría bien si:
  - Caso 1: Al llamar la función de ésta manera: obtenerMenoresQue30([1, 32, 2, 3]) devuelve un array así: [1,2,3]
  - Caso 2: Al llamar la función de ésta manera: obtenerMenoresQue30([30]) devuelve un array así: []

*/

function obtenerMenoresQue30(numeros) {
  let resultado = [];

  for (let indice = 0; indice < numeros.length; indice++) {
    if (numeros[indice] < 30) {
      resultado.push(numeros[i]);
    } else {
      i++;
    }
  }

  return resultado;
}

/*

Reparar la función de modo que dada una lista de nombres, devuelva los nombres en un solo string separándolos por comas.
Todo estaría bien si:
Caso 1: Al llamar la función de ésta manera: obtenerNombresSeparadosPorComa(['Diego','Kike', 'Maru', 'Sebas']) devuelve algo así: 'Diego, Kike, Maru, Sebas'
Caso 2: Al llamar la función de ésta manera: obtenerNombresSeparadosPorComa([]) devuelve un array así: ''

*/

function obtenerNombresSeparadosPorComa(listaNombres){
  let resultado = '';
  let posicion = 0;

  while (posicion <= listaNombres) {
    resultado = resultado + listaNombres[posicion];
    posicion+;
  }

  return resultado;
}
