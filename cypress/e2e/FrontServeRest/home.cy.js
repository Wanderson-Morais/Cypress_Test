describe('Tela de home', () => {

  beforeEach(() => {
    cy.login()
    cy.visit('https://front.serverest.dev/home')
  })

  // CT-001
  it('CT-001 — deve carregar a home após o login', () => {
    cy.url().should('include', '/home')
  })

  // CT-002
  it('CT-002 — deve filtrar produtos ao pesquisar pelo nome', () => {
    cy.get('[data-testid="pesquisar"]').type('Logitech MX Vertical')
    cy.get('[data-testid="botaoPesquisar"]').click()

    cy.get('[data-testid="adicionarNaLista"]').should('have.length.greaterThan', 0)
  })

  // CT-003
  it('CT-003 — deve exibir mensagem ao pesquisar produto inexistente', () => {
    cy.get('[data-testid="pesquisar"]').type('produtoinexistente123')
    cy.get('[data-testid="botaoPesquisar"]').click()

    cy.contains('Nenhum produto foi encontrado').should('be.visible')
  })

  // CT-004
  it('CT-004 — deve adicionar produto ao carrinho', () => {
    cy.get('[data-testid="adicionarNaLista"]').first().click()

    cy.get('[data-testid="product-decrease-quantity"]').should('be.visible')
  })

  // CT-005
  it('CT-005 — deve exibir mensagem de carrinho vazio', () => {
    cy.get('[data-testid="shopping-cart-button"]').click()

    cy.contains('Seu carrinho está vazio').should('be.visible')
  })

  // CT-006
  it('CT-006 — deve aumentar a quantidade de item no carrinho', () => {
    cy.get('[data-testid="adicionarNaLista"]').first().click()
    

    cy.get('[data-testid="product-increase-quantity"]').click()

    cy.get('[data-testid="product-increase-quantity"]').should('be.visible')
  })

  // CT-007
  it('CT-007 — deve diminuir a quantidade de item no carrinho', () => {
    cy.get('[data-testid="adicionarNaLista"]').first().click()
    cy.get('[data-testid="product-increase-quantity"]').click()

    cy.get('[data-testid="product-decrease-quantity"]').click()

    cy.get('[data-testid="product-decrease-quantity"]').should('be.visible')
  })

  // CT-008
  it('CT-008 — deve limpar a lista de produtos ao clicar em limpar', () => {
    cy.get('[data-testid="adicionarNaLista"]').first().click()
    

    cy.get('[data-testid="limparLista"]').click()

    cy.url().should('not.include', '/home')
  })

  // CT-009
  it('CT-009 — deve fazer logout e redirecionar para o login', () => {
    cy.contains('Logout').click()

    cy.url().should('include', '/login')
  })

  // CT-010
  it('CT-010 — deve redirecionar para login ao acessar home sem autenticação', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://front.serverest.dev/home')

    cy.url().should('include', '/login')
  })

})
