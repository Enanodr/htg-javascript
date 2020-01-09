/*

Reparar la función de modo que dada una lista de nombres, devuelva los nombres en un solo string separándolos por comas.
Todo estaría bien si:
Caso 1: Al llamar la función de ésta manera: obtenerNombresSeparadosPorComa(['Diego','Kike', 'Maru', 'Sebas']) devuelve algo así: 'Diego, Kike, Maru, Sebas'
Caso 2: Al llamar la función de ésta manera: obtenerMenoresQue30([30]) devuelve un array así: []

*/

function obtenerNombresSeparadosPorComa(listaNombres){
    let resultado = '';
    let posicion = 0;
  
    while (posicion < listaNombres.length) {
      console.log(posicion);
      if(posicion === listaNombres.length -1){
        resultado = resultado + listaNombres[posicion];
      }else{
        resultado = resultado + listaNombres[posicion] + ', ';
      }
      console.log(resultado);
      posicion++;
    }
  
    return resultado;
    
  }
  
  
  