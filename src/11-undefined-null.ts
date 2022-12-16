(() => {
  // El tipo nulo y undefined, se consideran un tipo de dato tambien.

  // let myNumber: number = undefined;
  // let myString: string = null;

  //  Si le asignamos a la variable un tipo undefined o null de manera inferida el dato se va convertir en un any.

  // Si se hace de manera explicita. La variable queda con el null o el undefined respectivamente.

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  // Null funciona como como su propio tipo de dato.

  myNull = null;

  // Inicialar una variable que recibe un tipo number pero su estado inicial es null o undefined
  // Es mas comun que se inicilize la variable en null.
  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'Ricardo';

  function hi(name: string | null) {
    let hello = 'hola';
    if (name) {
      hello += name;
    } else {
      hello + 'nobody';
    }
    console.log(hello);
  }

  function hi2(name: string | null) {
    let hello = 'hola';
    // 0? -> Optional Chaining:  El signo de interrogacion hace como si estuviera en la condicion if
    hello += name?.toLowerCase() || 'nobody';

    console.log(hello);
  }

  hi('Nicolas');
  hi(null);
})();
