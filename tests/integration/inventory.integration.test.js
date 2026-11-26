const test = require('node:test');
const assert = require('node:assert/strict');
const { createProduct, addProduct, calculateStockValue } = require('../../src/inventory');

test('fluxo completo: cadastrar produtos e consultar valor total', () => {
  let inventory = [];
  inventory = addProduct(inventory, createProduct('Notebook', 2, 2500));
  inventory = addProduct(inventory, createProduct('Headset', 4, 150));

  assert.equal(inventory.length, 2);
  assert.equal(calculateStockValue(inventory), 5600);
});
