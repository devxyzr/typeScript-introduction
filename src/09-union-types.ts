// Union types..

(() => {
  // Los union types no recibe tipado inferido, se debe hacer de manera explicita el tipo de dato que queremos recibir.

  let myVariableVar: boolean | number;
  let userId: string | number;

  userId = 777;
  userId = 'suerte';

  //En este caso, los parametros dentro de esta funcion se debe especificar el tipo de dato.

  function greeting(myText: string | number) {
    // Se puede agregar guardianes dentro de la funcion, que se van a ejecutar para el tipo del de dato que llega.

    if (typeof myText === 'string') {
      // Tipado dinamico, cuando agarramos en el dato dentro del if, el tipado dinamico detecta el tipo de dato y activa los metodos para string
      console.log(`string ${myText.toLowerCase()}`);
      myText.toLocaleLowerCase;
    } else {
      // Detecta que es un numero y activa los metodos para los numeros
      console.log(`number ${myText.toFixed(1)}`);
    }
  }

  greeting('Ricardo');
  greeting(777);
})();
