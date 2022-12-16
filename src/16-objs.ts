(() => {
  // Se puede re utilizar tipado de objetos.
  // Tipado para producto
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  // Re utilizando el tipado para que dentro del array solo reciba lo que esta tipado dentro del producto
  const products: any[] = [];

  const addProduct = (data: Product) => {
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

  // Agregando productos a al array con el patload del tipo de la funcion

  products.push({
    title: 'Product',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });

  console.log(products);
})();
