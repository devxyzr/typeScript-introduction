// Alias y tipos literales

(() => {
  // Type: Uso excluisvo de TypeScript
  // El nombre de los types debera ser pascal case
  // Se utiliza un igual despues del nombre
  // Puedo hacer referencia y re utilizarlo.
  // Se puede re utilizar el tipo y cambiar el tipo de valor que recibe

  type UserID = string | number | boolean;

  let userId: UserID;

  function greeting(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
      userId.toLocaleLowerCase;
    } else {
      console.log(`number ${userId.toFixed(1)}`);
    }
  }
  // Literal types
  // Conjunto acotado de strings - opciones de datos.
  type Sizes = 'M' | 'S' | 'L' | 'XL';
  let shirtSize: Sizes; // Conjunto de datos de los strings.

  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
  shirtSize = 'XL';
  shirtSize = 'R'; // Si se trata de asignar a la variable que contiene elm conjuto de  datos, va arrojar error

  function greeting2(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }

// Cuando ingreso los argumentos de la funcion va acotar los datos que estan detro del Type: Sizes.

    greeting2(111, "S")

})();
