// Funciones en TS
// con las fechas en el createAt no hay problema si la primera en una mayuiscula.

(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJSON(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size,
    };
  }

  // El resultado de la funcion es un objeto.

  const producto1 = createProductToJSON('P1', new Date(), 12, 'XL');

  // El tipado inferido va a activar las ayudas para objetos.
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);

  // Arrow funtion:

  const createProductToJSON2 = (
    title: string,
    createAt: Date,
    stock: number,
    // Si tenemos un parametro de funcion, donde queremos que sea opcional le agregamos el  ?
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size,
    };
  };

  const producto2 = createProductToJSON2('P1', new Date(), 12);

  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
})();
