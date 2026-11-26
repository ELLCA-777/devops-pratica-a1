const test = require('node:test');
const assert = require('node:assert/strict');
const { createProduct, calculateStockValue, addProduct } = require('../../src/inventory');

test('cria um produto válido', () => {
  const product = createProduct('Teclado', 3, 100);
  assert.equal(product.name, 'Teclado');
  assert.equal(product.quantity, 3);
  assert.equal(product.price, 100);
});

test('não permite nome vazio', () => {
  assert.throws(() => createProduct('  ', 1, 10), /nome do produto é obrigatório/);
});

test('não permite quantidade negativa ou fracionada', () => {
  assert.throws(() => createProduct('Mouse', -1, 10), /quantidade deve ser um inteiro/);
  assert.throws(() => createProduct('Mouse', 1.5, 10), /quantidade deve ser um inteiro/);
});

test('calcula corretamente o valor do estoque', () => {
  const products = [
    { name: 'Teclado', quantity: 2, price: 50 },
    { name: 'Mouse', quantity: 3, price: 20 }
  ];
  assert.equal(calculateStockValue(products), 160);
});

test('adiciona produto sem alterar a lista original', () => {
  const original = [];
  const updated = addProduct(original, { name: 'Monitor', quantity: 1, price: 500 });
  assert.equal(original.length, 0);
  assert.equal(updated.length, 1);
});
