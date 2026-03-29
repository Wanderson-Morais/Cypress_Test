const URL_LOGIN = 'https://front.serverest.dev/login'
const EMAIL_VALIDO = 'wanderson@email.com'
const SENHA_VALIDA = '1234'
const SENHA_INVALIDA = '0000'

describe('Tela de Login', () => {

  beforeEach(() => {
    cy.visit(URL_LOGIN)
  })

  // CT-001
  it('CT-001 — Login com sucesso', () => {
    cy.get('[data-testid="email"]').type(EMAIL_VALIDO)
    cy.get('[data-testid="senha"]').type(SENHA_VALIDA)
    cy.get('[data-testid="entrar"]').click()

  })

  // CT-002
  it('CT-002 — Login com e-mail inválido', () => {
    cy.get('[data-testid="email"]').type('usuariosememail')
    cy.get('[data-testid="senha"]').type(SENHA_INVALIDA)
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('include', '/login')
    
  })

  // CT-003
  it('CT-003 — Login com senha incorreta', () => {
    cy.get('[data-testid="email"]').type(EMAIL_VALIDO)
    cy.get('[data-testid="senha"]').type(SENHA_INVALIDA)
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('include', '/login')
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })

  // CT-004
  it('CT-004 — Login com campos em branco', () => {
    cy.get('[data-testid="entrar"]').click()

    cy.contains('Email não pode ficar em branco').should('be.visible')
    cy.contains('Password não pode ficar em branco').should('be.visible')
  })

  // CT-005
  it('CT-005 — Login com e-mail não cadastrado', () => {
    cy.get('[data-testid="email"]').type('naocadastrado@email.com')
    cy.get('[data-testid="senha"]').type(SENHA_VALIDA)
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('include', '/login')
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })

  // CT-006
  it('CT-006 — Login com tecla Enter', () => {
    cy.get('[data-testid="email"]').type(EMAIL_VALIDO)
    cy.get('[data-testid="senha"]').type(SENHA_VALIDA)
    cy.get('[data-testid="senha"]').type('{enter}')

    
  })

})
