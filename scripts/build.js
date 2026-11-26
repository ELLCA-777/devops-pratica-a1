const fs = require('node:fs');
const path = require('node:path');

const source = path.join(__dirname, '..', 'src');
const output = path.join(__dirname, '..', 'dist');

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
fs.cpSync(source, output, { recursive: true });

console.log('Build concluído: arquivos da pasta src copiados para dist/.');
