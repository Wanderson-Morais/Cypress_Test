# Testes E2E — FrontServeRest

Suite de testes automatizados com [Cypress](https://www.cypress.io/) para o frontend do [ServeRest](https://front.serverest.dev), um e-commerce fictício utilizado para prática de QA.

## Sobre o projeto

O repositório contém apenas infraestrutura de testes — não há código de aplicação. Os testes cobrem os principais fluxos do sistema por meio de testes E2E (end-to-end) executados diretamente no navegador.

**Aplicação testada:** https://front.serverest.dev

## Estrutura

```
cypress/
├── e2e/
│   └── FrontServeRest/
│       ├── login.cy.js     # Testes da tela de login
│       └── home.cy.js      # Testes da tela home (catálogo de produtos)
├── support/
│   ├── commands.js         # Comando customizado cy.login()
│   └── e2e.js              # Setup global (importa commands.js)
└── fixtures/
    └── example.json        # Dados estáticos para cy.fixture()

docs/
└── FrontServeRest/
    ├── CT_login.md         # Casos de teste documentados — Login
    └── CT_home.md          # Casos de teste documentados — Home

cypress.config.js           # Configuração do Cypress
```

## Cobertura de testes

### Tela de Login (`login.cy.js`)

| ID | Cenário |
|----|---------|
| CT-001 | Login com sucesso |
| CT-002 | Login com e-mail inválido |
| CT-003 | Login com senha incorreta |
| CT-004 | Login com campos em branco |
| CT-005 | Login com e-mail não cadastrado |
| CT-006 | Login via tecla Enter |

### Tela Home (`home.cy.js`)

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
```

## Convenções

- Seletores usam `data-testid` (ex: `[data-testid="email"]`)
- IDs de teste seguem o padrão `CT-NNN`, documentados em `docs/`
- O `beforeEach` de cada spec cuida da navegação — os testes individuais não chamam `cy.visit()` diretamente
- O comando customizado `cy.login()` utiliza `cy.session()` para reaproveitar a sessão autenticada entre os testes da home
- Credenciais de teste: `wanderson@email.com` / `1234`
