(() => {
  // Functions con arrow functions.
  // Tambien se puede poner como argumento, un array
  // Podemos espécificar que tipo de dato quermos que reciba

  // Envia un array de numeros, y devuelve la suma de ellos
  // Funcion de que retorna un numero de manera inferida, tmabien se puede hacer de manera explicita. Con dos puntoes ":" despues del parentesis.
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    // El tipado de inferido sabe el el total tiene que devolver un numero y va a permitir que se acedana los metodo que tiene el numero.
    // Inferencia dentro de las funciones.
    return total;
  };

  // Funcion que no tiene retorno.
  // Funcion void, que no retorna nada.
  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total es:${rta}`);
    return rta;
  };

  printTotal([1, 2, 4, 3, 4, 6, 3]);
  // console.log(rta);
})();
