describe('Bemol - Cards de Produto', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://www.bemol.com.br/')
  })

  it('CT-001 - deve exibir a imagem do produto no card', () => {
    cy.get('.product-card img, .shelf-item img, [class*="product"] img')
      .first()
      .should('be.visible')
      .and('have.attr', 'src')
  })

  it('CT-002 - deve exibir o nome do produto no card', () => {
    cy.get('.product-card .product-name, .shelf-item__title, [class*="product"] [class*="name"], [class*="product"] [class*="title"]')
      .first()
      .should('be.visible')
      .and('not.be.empty')
  })

  it('CT-003 - deve exibir a marca do produto no card', () => {
    cy.get('[class*="brand"], [class*="marca"]')
      .first()
      .should('be.visible')
      .and('not.be.empty')
  })

  it('CT-004 - deve exibir o preço promocional e opção de parcelamento no card', () => {
    cy.get('[class*="price"], [class*="preco"], [class*="valor"]')
      .first()
      .should('be.visible')

    cy.get('[class*="installment"], [class*="parcel"], [class*="parcela"]')
      .first()
      .should('be.visible')
  })

  it('CT-005 - botão "Mais detalhes" deve redirecionar para a página do produto', () => {
    cy.contains('a, button', /mais detalhes/i)
      .first()
      .should('be.visible')
      .click()

    cy.url().should('not.eq', 'https://www.bemol.com.br/')
  })

  it('CT-006 - botão "Adicionar ao carrinho" deve adicionar o produto', () => {
    cy.contains('button', /adicionar ao carrinho/i)
      .first()
      .click({ force: true })

    cy.get('[class*="cart"] [class*="count"], [class*="carrinho"] [class*="count"], [class*="minicart"]')
      .should('not.contain', '0')
  })

  it('CT-007 - clicar no nome do produto deve redirecionar para a página do produto', () => {
    cy.get('a[href*="/p"]')
      .first()
      .click({ force: true })

    cy.url().should('include', '/p')
  })
})
