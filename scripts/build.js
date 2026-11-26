const fs = require('node:fs');
const path = require('node:path');

const source = path.join(__dirname, '..', 'src');
const output = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(source)) {
  throw new Error('A pasta src não foi encontrada. Não foi possível executar o build.');
}

fs.rmSync(output, {
  recursive: true,
  force: true
});

fs.mkdirSync(output, {
  recursive: true
});

fs.cpSync(source, output, {
  recursive: true
});

console.log('Build concluído com sucesso!');
console.log('Arquivos da aplicação copiados para dist/.');