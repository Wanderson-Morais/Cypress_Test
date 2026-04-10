const URL_BASE    = 'https://demo.nopcommerce.com'
const URL_LOGIN   = `${URL_BASE}/login`
const URL_REGISTER = `${URL_BASE}/register`

const EMAIL_VALIDO   = 'victoria_victoria@nopCommerce.com'
const SENHA_VALIDA   = 'nopCommerce1'
const SENHA_INVALIDA = 'senhaerrada123'

// ─────────────────────────────────────────────
// LOGIN
// ─────────────────────────────────────────────

describe('nopCommerce - Login', () => {

  beforeEach(() => {
    cy.visit(URL_LOGIN)
  })

  // CT-001
  it('CT-001 — deve fazer login com sucesso e redirecionar para a home', () => {
    cy.get('#Email').type(EMAIL_VALIDO)
    cy.get('#Password').type(SENHA_VALIDA)
    cy.get('.login-button').click()

    cy.url().should('eq', `${URL_BASE}/`)
  })

  // CT-002
  it('CT-002 — deve exibir erro ao fazer login com e-mail inválido', () => {
    cy.get('#Email').type('emailsemarroba')
    cy.get('#Password').type(SENHA_VALIDA)
    cy.get('.login-button').click()

    cy.get('#Email-error').should('be.visible')
  })

  // CT-003
  it('CT-003 — deve exibir erro ao fazer login com senha incorreta', () => {
    cy.get('#Email').type(EMAIL_VALIDO)
    cy.get('#Password').type(SENHA_INVALIDA)
    cy.get('.login-button').click()

    cy.get('.message-error').should('be.visible')
    cy.url().should('include', '/login')
  })

  // CT-004
  it('CT-004 — deve exibir erros de validação com campos em branco', () => {
    cy.get('.login-button').click()

    cy.get('#Email-error').should('be.visible')
  })

  // CT-005
  it('CT-005 — link "Forgot your password?" deve redirecionar para recuperação de senha', () => {
    cy.contains('a', 'Forgot your password?').click()

    cy.url().should('include', '/passwordrecovery')
  })

})

// ─────────────────────────────────────────────
// REGISTRO
// ─────────────────────────────────────────────

describe('nopCommerce - Registro', () => {

  beforeEach(() => {
    cy.visit(URL_REGISTER)
  })

  // CT-006
  it('CT-006 — deve exibir erros ao submeter formulário de registro em branco', () => {
    cy.get('.register-next-step-button').click()

    cy.get('#FirstName-error').should('be.visible')
    cy.get('#LastName-error').should('be.visible')
    cy.get('#Email-error').should('be.visible')
    cy.get('#Password-error').should('be.visible')
  })

  // CT-007
  it('CT-007 — deve exibir erro quando as senhas não coincidem', () => {
    cy.get('#FirstName').type('Teste')
    cy.get('#LastName').type('Usuário')
    cy.get('#Email').type(`teste_${Date.now()}@email.com`)
    cy.get('#Password').type('Senha@123')
    cy.get('#ConfirmPassword').type('SenhaDiferente@123')
    cy.get('.register-next-step-button').click()

    cy.get('#ConfirmPassword-error').should('be.visible')
  })

  // CT-008
  it('CT-008 — deve exibir erro ao informar e-mail com formato inválido', () => {
    cy.get('#FirstName').type('Teste')
    cy.get('#LastName').type('Usuário')
    cy.get('#Email').type('emailinvalido')
    cy.get('#Password').type('Senha@123')
    cy.get('#ConfirmPassword').type('Senha@123')
    cy.get('.register-next-step-button').click()

    cy.get('#Email-error').should('be.visible')
  })

})

// ─────────────────────────────────────────────
// BUSCA
// ─────────────────────────────────────────────

describe('nopCommerce - Busca', () => {

  beforeEach(() => {
    cy.visit(URL_BASE)
  })

  // CT-009
  it('CT-009 — campo de busca deve estar visível e habilitado', () => {
    cy.get('#small-searchterms')
      .should('be.visible')
      .and('be.enabled')
  })

  // CT-010
  it('CT-010 — busca por produto válido deve retornar resultados', () => {
    cy.get('#small-searchterms').type('Apple')
    cy.get('.search-box-button').click()

    cy.url().should('include', 'Apple')
    cy.get('.product-item').should('have.length.greaterThan', 0)
  })

  // CT-011
  it('CT-011 — busca por produto inexistente deve exibir mensagem de sem resultados', () => {
    cy.get('#small-searchterms').type('xyzprodutoinexistente999')
    cy.get('.search-box-button').click()

    cy.contains('No products were found that matched your criteria.').should('be.visible')
  })

})

// ─────────────────────────────────────────────
// CARRINHO
// ─────────────────────────────────────────────

describe('nopCommerce - Carrinho', () => {

  beforeEach(() => {
    cy.visit(`${URL_BASE}/computers/notebooks`)
  })

  // CT-012
  it('CT-012 — deve adicionar produto ao carrinho a partir da página de categoria', () => {
    cy.get('.product-item').first().find('.product-title a').click()
    cy.get('.add-to-cart-button').click()

    cy.get('.bar-notification.success').should('be.visible')
  })

  // CT-013
  it('CT-013 — contador do carrinho deve atualizar após adicionar produto', () => {
    cy.get('.cart-qty').invoke('text').then((antes) => {
      cy.get('.product-item').first().find('.product-title a').click()
      cy.get('.add-to-cart-button').click()

      cy.get('.bar-notification.success').should('be.visible')
      cy.get('.cart-qty').should('not.have.text', antes)
    })
  })

  // CT-014
  it('CT-014 — deve remover produto do carrinho', () => {
    cy.get('.product-item').first().find('.product-title a').click()
    cy.get('.add-to-cart-button').click()
    cy.get('.bar-notification.success').should('be.visible')

    cy.visit(`${URL_BASE}/cart`)
    cy.get('.remove-btn').first().click()

    cy.get('.order-summary-content').contains('Your Shopping Cart is empty!').should('be.visible')
  })

  // CT-015
  it('CT-015 — carrinho vazio deve exibir mensagem', () => {
    cy.visit(`${URL_BASE}/cart`)

    cy.contains('Your Shopping Cart is empty!').should('be.visible')
  })

})
