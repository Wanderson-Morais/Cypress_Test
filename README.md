# Testes E2E — FrontServeRest & Bemol

Suite de testes automatizados com [Cypress](https://www.cypress.io/) cobrindo dois frontends:

- **ServeRest** — e-commerce fictício para prática de QA: https://front.serverest.dev
- **Bemol** — e-commerce real da rede varejista Bemol: https://www.bemol.com.br

O repositório contém apenas infraestrutura de testes — não há código de aplicação.

## Estrutura

```
cypress/
  e2e/
    FrontServeRest/
      login.cy.js
      home.cy.js
      spec.cy.js
      bemol/
        produtos.cy.js
  support/
    commands.js
    e2e.js
  fixtures/
docs/
  FrontServeRest/
    CT_login.md
    CT_home.md
    bemol/
      CT_produtos.md
cypress.config.js
```

## Cobertura de testes

### ServeRest — Login (`login.cy.js`)

| ID | Cenário |
|----|---------|
| CT-001 | Login com sucesso |
| CT-002 | Login com e-mail inválido |
| CT-003 | Login com senha incorreta |
| CT-004 | Login com campos em branco |
| CT-005 | Login com e-mail não cadastrado |
| CT-006 | Login via tecla Enter |

### ServeRest — Home (`home.cy.js`)

| ID | Cenário |
|----|---------|
| CT-001 | Carregar a home após o login |
| CT-002 | Filtrar produtos pelo nome |
| CT-003 | Pesquisar produto inexistente |
| CT-004 | Adicionar produto à lista |
| CT-005 | Abrir carrinho vazio |
| CT-006 | Aumentar quantidade de item |
| CT-007 | Diminuir quantidade de item |
| CT-008 | Limpar lista de produtos |
| CT-009 | Logout da home |
| CT-010 | Proteção de rota sem autenticação |

### Bemol — Cards de Produto (`bemol/produtos.cy.js`)

| ID | Cenário |
|----|---------|
| CT-001 | Exibição da imagem do produto no card |
| CT-002 | Exibição do nome do produto no card |
| CT-003 | Exibição da marca do produto no card |
| CT-004 | Exibição do preço promocional e parcelamento |
| CT-005 | Botão "Mais detalhes" redireciona para a página do produto |
| CT-006 | Botão "Adicionar ao carrinho" adiciona o produto |
| CT-007 | Clique no nome do produto redireciona para a página do produto |

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Cypress instalado no projeto:

```bash
npm install
```

## Como executar

```bash
# Abrir o Cypress em modo interativo
npx cypress open

# Executar todos os testes em modo headless
npx cypress run

# Executar um spec específico
npx cypress run --spec "cypress/e2e/FrontServeRest/login.cy.js"
npx cypress run --spec "cypress/e2e/FrontServeRest/home.cy.js"
npx cypress run --spec "cypress/e2e/FrontServeRest/bemol/produtos.cy.js"
```
