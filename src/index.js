const { createProduct, calculateStockValue, addProduct } = require('./inventory');

const initialProducts = [
  createProduct('Teclado', 10, 89.90),
  createProduct('Mouse', 15, 49.90)
];

const updatedProducts = addProduct(initialProducts, createProduct('Monitor', 5, 699.00));

console.log('Produtos cadastrados:', updatedProducts.length);
console.log('Valor total do estoque: R$', calculateStockValue(updatedProducts).toFixed(2));
