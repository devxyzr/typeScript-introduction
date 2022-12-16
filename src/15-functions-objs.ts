(() => {
  // Objetos en funciones
  // Dentro del parametro de la funcion podemos pasar un objeto dentro de la funcion.
  // data: {} -> va ser un objeto

  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  // Pasar argumentos como objetos en Ts:
  // Estamos enviando como párametros un objeto.

  login({
    email: 'nico:nico.co',
    password: 121212121,
  });

  // Un parametro puede ser opcional con el ?

  // Esta funcion va agregar a un array un dis productos

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'M',
  });

  console.log(products);
})();
