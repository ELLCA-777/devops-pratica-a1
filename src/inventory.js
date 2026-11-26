// Regras de negócio do pequeno sistema de estoque.
function createProduct(name, quantity, price) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('O nome do produto é obrigatório.');
  }
  if (!Number.isInteger(quantity) || quantity < 0) {
    throw new Error('A quantidade deve ser um inteiro maior ou igual a zero.');
  }
  if (typeof price !== 'number' || !Number.isFinite(price) || price < 0) {
    throw new Error('O preço deve ser um número maior ou igual a zero.');
  }
  return { id: Date.now() + Math.floor(Math.random() * 1000), name: name.trim(), quantity, price };
}

function calculateStockValue(products) {
  return products.reduce((total, product) => total + product.quantity * product.price, 0);
}


const { randomUUID } = require('node:crypto');

function validateProduct(product) {
  if (!product || typeof product !== 'object') {
    throw new Error('Produto inválido.');
  }

  if (typeof product.name !== 'string' || product.name.trim() === '') {
    throw new Error('O nome do produto é obrigatório.');
  }

  if (!Number.isInteger(product.quantity) || product.quantity < 0) {
    throw new Error('A quantidade deve ser um inteiro maior ou igual a zero.');
  }

  if (
    typeof product.price !== 'number' ||
    !Number.isFinite(product.price) ||
    product.price < 0
  ) {
    throw new Error('O preço deve ser um número válido maior ou igual a zero.');
  }
}

function createProduct(name, quantity, price) {
  validateProduct({ name, quantity, price });

  return {
    id: randomUUID(),
    name: name.trim(),
    quantity,
    price
  };
}

function calculateStockValue(products) {
  if (!Array.isArray(products)) {
    throw new Error('O estoque deve ser uma lista de produtos.');
  }

  return products.reduce((total, product) => {
    validateProduct(product);
    return total + product.quantity * product.price;
  }, 0);
}

function addProduct(products, product) {
  if (!Array.isArray(products)) {
    throw new Error('O estoque deve ser uma lista de produtos.');
  }

  validateProduct(product);

  return [...products, product];
}

module.exports = {
  createProduct,
  calculateStockValue,
  addProduct
};
