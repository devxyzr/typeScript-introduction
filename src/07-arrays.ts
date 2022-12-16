(() => {
  //No se le puede agregar al array mas elemetos que no sean del mismo tipo

  let prices = [1, 2, 5, 4, 9, 6];

  // Puede contener de manera inferida, distintos tipos de datos. Lo que se infieran en un primer momento

  let prices2 = [1, 2, 5, 4, 9, 6, 'hola', true];

  // prices.push('Asas');
  // prices.push(true);
  // prices.push([]);

  prices.push(123132123);

  prices = [1, 2, 3, 5, 1];

  let products = ['hola', true];
  products.push(12);

  // Como debe decirle de forma explicita como debe estar tipado el array para que reciba distintos tipos de datos.
  // Hay manera especificas de trabajar con objetos, el tipo "Object" va a aceptar objetos de JS, de la ventana window

  let mixed: (number | string | boolean | object)[] = ['hola', true];

  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  // Cuando se realiza la operacion el tipado inferido espera que las operaciones sean con el mismop tipo de dato.

  let numbers = [1, 2, 5, 4, 9, 6];

  numbers.map((item) => item * 1);
})();
