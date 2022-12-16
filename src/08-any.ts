(() => {
  // Tipos exlusivos de TypeScript
  // Any: Cualquier cosa entre, numero booleano, string, objeto, array, etc. Desactivamos el typado inferente
  // Se recomienda no se use el any.
  // TypeScrip viene de forma incrementar para que no sea ta rudo cuando se esta aprendiendo en typeScript

  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = [];
  myDynamicVar = '';

  // El autocompletado para el tipo no sale a ruedo con el any.

  myDynamicVar = 'Hola';

  // Cascs cambiar el tipo de dato con "as" de any a string -> Primera forma

  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  // casc de un any con "as" a un number -> Segunda forma

  myDynamicVar = 12121;

  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
