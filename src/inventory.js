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

function addProduct(products, product) {
  return [...products, product];
}

module.exports = { createProduct, calculateStockValue, addProduct };
