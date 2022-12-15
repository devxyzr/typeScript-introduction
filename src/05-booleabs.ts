(() => {
  //Tipado de inferencia
  //No se puede cambiar
  let isEnable = true;
  isEnable = 'abc';
  // let isEnable = false;

  // Tipado explicito

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random(); // Imrpime un numero entre el 0 y 1
  console.log('random', random);

  isNew = random >= 0.5 ? true : false; // Sin que se ejecute la funcion el tipado dinamico sabe que la variable debe devolver un boobleno

  console.log('isNew', isNew);

  const myBoolean: boolean = true;
})();
