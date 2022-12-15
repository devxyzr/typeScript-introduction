(() => {
  // Inferencia -> Motor de inferencia de TypeScript

  let ProductPrice = 100;
  ProductPrice = 10;
  console.log('ProductPrice', ProductPrice);

  // Forma explicita de TypeScript

  let customerAge: number = 28;
  /*custumerAge = customerAge + '1';*/ // No puede sumar un numero con un string, en JS normalmente se podria
  customerAge = customerAge + 1; // Si sumo el tipo de dato igual no tendria error.
  console.log('customerAge', customerAge);

  // Variabel de tipo numbre que no esta inicializada debe si o si de forma explicita.

  let productInStock: number;
  console.log('productInStock', productInStock);

  if (productInStock > 10) {
    console.log('In greater than 10');
  }

  let discount = parseInt('123');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  // Exadecimal entra dentro del conjunto de numbers

  let hex = 0xfff;
  console.log('hex', hex);

  // Binario entra dentro del conjunto de numeros

  let bin = 0b1010;
  console.log('bin', bin);

  // No se debe utilizar el nombre "Number" con mayuscula para tipar el dato. Siempre empieza en minuscula.

  const myNumber: Number = 10;

  //NaN entra dentro del conjunto de number.
  NaN;
})();
