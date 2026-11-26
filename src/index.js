const {
  createProduct,
  calculateStockValue,
  addProduct
} = require('./inventory');

const inventory = [];

const products = [
  createProduct('Teclado Mecânico', 10, 189.90),
  createProduct('Mouse Gamer', 15, 89.90),
  createProduct('Monitor Full HD', 5, 699.00),
  createProduct('Headset Gamer', 8, 149.90),
  createProduct('Webcam HD', 6, 119.90)
];

let currentInventory = inventory;

for (const product of products) {
  currentInventory = addProduct(currentInventory, product);
}

const totalValue = calculateStockValue(currentInventory);

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

console.log('================================');
console.log('       CONTROLE DE ESTOQUE');
console.log('================================');

console.log('\nProdutos cadastrados:');

for (const product of currentInventory) {
  console.log(
    `- ${product.name} | Quantidade: ${product.quantity} | Preço: ${currency.format(product.price)}`
  );
}

console.log('\n================================');
console.log(`Total de produtos: ${currentInventory.length}`);
console.log(`Valor total do estoque: ${currency.format(totalValue)}`);
console.log('================================');