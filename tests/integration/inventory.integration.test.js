const test = require('node:test');
const assert = require('node:assert/strict');

const {
  createProduct,
  addProduct,
  calculateStockValue
} = require('../../src/inventory');

test('fluxo completo: cadastrar produtos e consultar valor total', () => {
  let inventory = [];

  inventory = addProduct(
    inventory,
    createProduct('Notebook', 2, 2500)
  );

  inventory = addProduct(
    inventory,
    createProduct('Headset', 4, 150)
  );

  inventory = addProduct(
    inventory,
    createProduct('Mouse Gamer', 3, 100)
  );

  assert.equal(inventory.length, 3);
  assert.equal(calculateStockValue(inventory), 5900);
});

test('fluxo de estoque mantém os produtos anteriores ao adicionar novos itens', () => {
  let inventory = [];

  inventory = addProduct(
    inventory,
    createProduct('Teclado', 5, 100)
  );

  const previousInventory = inventory;

  inventory = addProduct(
    inventory,
    createProduct('Monitor', 2, 800)
  );

  assert.equal(previousInventory.length, 1);
  assert.equal(inventory.length, 2);
  assert.equal(calculateStockValue(inventory), 2100);
});

test('não permite concluir o cadastro de um produto com preço inválido', () => {
  let inventory = [];

  inventory = addProduct(
    inventory,
    createProduct('Mouse', 2, 50)
  );

  assert.throws(
    () => createProduct('Monitor', 1, -500),
    /preço deve ser um número válido/
  );

  assert.equal(inventory.length, 1);
  assert.equal(calculateStockValue(inventory), 100);
});