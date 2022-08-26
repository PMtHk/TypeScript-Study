import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { Product } from './product.model';

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
];

const newProd = new Product('', -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log('Validation Erros');
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// use class-transformer
const loadedProducts = plainToClass(Product, products);

// manually
// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// const p1 = new Product('A Book', 12.99);
// console.log(p1.getInformation());
