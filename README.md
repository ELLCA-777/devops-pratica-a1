# Prática A1 – DevOps

Projeto demonstrativo de um sistema simples de estoque. O objetivo é aplicar Git, organização por branches, revisão por Pull Request, testes automatizados e integração contínua com GitHub Actions.

## Requisitos
- Node.js 22 ou superior
- Git
- Conta no GitHub

## Executar localmente
```bash
npm ci
npm run build
npm test
npm run test:integration
```

Ou execute tudo em sequência:
```bash
npm run validate
```

## Estrutura
- `src/`: código da aplicação e regras de negócio
- `tests/unit/`: testes unitários
- `tests/integration/`: teste do fluxo integrado
- `scripts/build.js`: processo de build
- `.github/workflows/ci.yml`: pipeline de integração contínua
- `.github/pull_request_template.md`: checklist para revisão

## Fluxo Git sugerido
1. Criar o repositório remoto no GitHub.
2. Enviar a branch `main`.
3. Criar `develop` a partir de `main`.
4. Criar uma branch por funcionalidade: `feature/validacao-produto`.
5. Fazer commits pequenos e objetivos.
6. Abrir Pull Request de `feature/...` para `develop`.
7. Conferir se a GitHub Action terminou com sucesso.
8. Integrar em `develop`; depois abrir PR de `develop` para `main`.

## Exemplos de Conventional Commits
- `feat: adiciona cadastro de produtos`
- `fix: impede quantidade negativa no estoque`
- `test: adiciona testes do cálculo de estoque`
- `ci: configura pipeline do GitHub Actions`
- `docs: documenta execução do projeto`

## Evidências para entregar
Inclua capturas de tela reais de:
1. Repositório no GitHub com os arquivos.
2. Branches `main` e `develop` e uma branch `feature`.
3. Histórico de commits padronizados.
4. Pull Request aberto ou integrado.
5. Aba Actions com execução verde.
6. Terminal mostrando build e testes aprovados.

Não declare uma etapa como realizada sem executar e registrar a evidência correspondente.
