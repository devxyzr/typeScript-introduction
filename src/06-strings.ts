(() => {
  let productTitle = 'My good Product';
  // productTitle = null;
  // productTitle= () => {}
  // productTitle = 123
  productTitle = 'My good Product change';
  console.log('productTitle', productTitle);

  const productDesription = 'ja ja ja ja'; // Se puede utilizar comillas dobles
  console.log('productDescription', productDesription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title:${productTitle}
  description:${productDesription}
  price:${productPrice}
  isNew: ${isNew}
`;

  console.log(summary);

  const myStrin: string = ``;
})();
