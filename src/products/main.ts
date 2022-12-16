import { addProduct, calcStock, products } from './product.services';

addProduct({
  title: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
});

addProduct({
  title: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
});

const total = calcStock();

console.log(products);
