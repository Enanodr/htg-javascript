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
      resultado.push(numeros[indice]);
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

  while (posicion < listaNombres.length) { /* le quite el = y le agregue .length para que compare posicion con el largo de la lista*/
    if (posicion == 0) {              /*le agregue una condicion que dice que si posicion es 0 solo agregue el nombre en esa posicion a resultado...*/
      resultado = resultado + listaNombres[posicion];
    } else {    /*... sino es igual a 0 que le agregue a resultado una coma y el nombre en esa posicion*/
      resultado = resultado + ',' + listaNombres[posicion]
    }
    posicion++;  /*le faltaba un signo + para que a la variable posicion se le sume 1 cuando haga el bucle*/
  }

  return resultado;
}
