const test = require('node:test');
const assert = require('node:assert/strict');

const {
  createProduct,
  calculateStockValue,
  addProduct
} = require('../../src/inventory');

test('cria um produto válido', () => {
  const product = createProduct('Teclado', 3, 100);

  assert.ok(product.id);
  assert.equal(product.name, 'Teclado');
  assert.equal(product.quantity, 3);
  assert.equal(product.price, 100);
});

test('remove espaços desnecessários do nome', () => {
  const product = createProduct('  Mouse Gamer  ', 2, 80);

  assert.equal(product.name, 'Mouse Gamer');
});

test('não permite nome vazio', () => {
  assert.throws(
    () => createProduct('  ', 1, 10),
    /nome do produto é obrigatório/
  );
});

test('não permite quantidade negativa', () => {
  assert.throws(
    () => createProduct('Mouse', -1, 10),
    /quantidade deve ser um inteiro/
  );
});

test('não permite quantidade fracionada', () => {
  assert.throws(
    () => createProduct('Mouse', 1.5, 10),
    /quantidade deve ser um inteiro/
  );
});

test('não permite preço negativo', () => {
  assert.throws(
    () => createProduct('Mouse', 1, -10),
    /preço deve ser um número válido/
  );
});

test('não permite preço que não seja numérico', () => {
  assert.throws(
    () => createProduct('Mouse', 1, 'dez'),
    /preço deve ser um número válido/
  );
});

test('não permite valores infinitos ou NaN no preço', () => {
  assert.throws(
    () => createProduct('Mouse', 1, Infinity),
    /preço deve ser um número válido/
  );

  assert.throws(
    () => createProduct('Mouse', 1, NaN),
    /preço deve ser um número válido/
  );
});

test('calcula corretamente o valor total do estoque', () => {
  const products = [
    { name: 'Teclado', quantity: 2, price: 50 },
    { name: 'Mouse', quantity: 3, price: 20 }
  ];

  assert.equal(calculateStockValue(products), 160);
});

test('retorna zero quando o estoque está vazio', () => {
  assert.equal(calculateStockValue([]), 0);
});

test('não permite calcular estoque com entrada inválida', () => {
  assert.throws(
    () => calculateStockValue(null),
    /estoque deve ser uma lista/
  );
});

test('não permite calcular estoque com produto inválido', () => {
  assert.throws(
    () => calculateStockValue([
      { name: 'Mouse', quantity: -1, price: 20 }
    ]),
    /quantidade deve ser um inteiro/
  );
});

test('adiciona produto sem alterar a lista original', () => {
  const original = [];

  const product = {
    name: 'Monitor',
    quantity: 1,
    price: 500
  };

  const updated = addProduct(original, product);

  assert.equal(original.length, 0);
  assert.equal(updated.length, 1);
  assert.equal(updated[0].name, 'Monitor');
});

test('não permite adicionar produto inválido', () => {
  assert.throws(
    () => addProduct([], {
      name: 'Mouse',
      quantity: 1,
      price: -50
    }),
    /preço deve ser um número válido/
  );
});