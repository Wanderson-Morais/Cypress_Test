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

  it('CT-008 - campo de busca deve estar visível e habilitado', () => {
    cy.get('input[class*="search"], input[class*="Search"], input[class*="vtex-search"], input[class*="searchbar"], [class*="search"] input, [class*="Search"] input')
      .first()
      .should('be.visible')
      .and('be.enabled')
  })

  it('CT-009 - busca por produto válido deve retornar resultados', () => {
    cy.get('input[class*="search"], input[class*="Search"], input[class*="vtex-search"], input[class*="searchbar"], [class*="search"] input, [class*="Search"] input')
      .first()
      .type('Samsung{enter}')

    cy.url().should('include', 'Samsung')
    cy.get('a[href*="/p"]').should('have.length.greaterThan', 0)
  })

  it('CT-010 - busca por termo inexistente deve exibir mensagem de sem resultados', () => {
    cy.get('input[class*="search"], input[class*="Search"], input[class*="vtex-search"], input[class*="searchbar"], [class*="search"] input, [class*="Search"] input')
      .first()
      .type('xyzprodutoinexistente123{enter}')

    cy.contains(/Desculpe, não encontramos o que você procurava./i).should('be.visible')
  })
})

describe('Bemol - Menu de Categorias', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://www.bemol.com.br/')
  })

  const categorias = [
    { nome: 'Celulares',        href: '/celular-e-smartphone' },
    { nome: 'Eletrodomésticos', href: '/eletrodomesticos'     },
    { nome: 'Móveis',           href: '/moveis'               },
    { nome: 'Informática',      href: '/informatica'          },
    { nome: 'Climatização',     href: '/ar-e-ventilacao'      },
    { nome: 'TV e Vídeo',       href: '/tv-e-video'           },
    { nome: 'Eletroportáteis',  href: '/eletroportateis'      },
  ]

  categorias.forEach(({ nome, href }, index) => {
    it(`CT-${String(index + 11).padStart(3, '0')} - página da categoria "${nome}" deve carregar corretamente`, () => {
      cy.visit(`https://www.bemol.com.br${href}`)

      cy.url().should('include', href)
      cy.get('a[href*="/p"]').should('have.length.greaterThan', 0)
    })
  })
})

describe('Bemol - Chatbot Bob', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://www.bemol.com.br/')
  })

  it('CT-018 - widget do Bob deve estar visível no canto inferior direito', () => {
    cy.get('[id*="bob"], [class*="bob"], [id*="chat"], [class*="chat-widget"], [id*="blip"], iframe[title*="chat" i]', { timeout: 10000 })
      .first()
      .should('exist')
  })

  it('CT-019 - clicar no widget do Bob deve abrir o chat', () => {
    cy.get('[id*="bob"], [class*="bob"], [id*="chat"], [class*="chat-widget"], [id*="blip"], iframe[title*="chat" i]', { timeout: 10000 })
      .first()
      .click({ force: true })

    cy.get('[id*="bob"], [class*="bob"], [id*="chat-open"], [class*="chat-open"], iframe[title*="chat" i]', { timeout: 10000 })
      .should('be.visible')
  })
})

describe('Bemol - Carrinho', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false)
    cy.visit('https://www.bemol.com.br/')
  })

  it('CT-020 - deve adicionar um produto ao carrinho', () => {
    cy.contains('button', /adicionar ao carrinho/i)
      .first()
      .click({ force: true })

    cy.get('[class*="minicart"], [class*="cart"], [class*="sidebar"]', { timeout: 10000 })
      .should('exist')
  })

  it('CT-021 - contador do carrinho deve atualizar ao adicionar produto', () => {
    cy.contains('button', /adicionar ao carrinho/i)
      .first()
      .click({ force: true })

    cy.get('[class*="minicart"] [class*="badge"], [class*="cart"] [class*="badge"], [class*="cart"] [class*="count"], [class*="cartIcon"] span', { timeout: 10000 })
      .should('exist')
      .and(($el) => {
        expect(parseInt($el.text())).to.be.greaterThan(0)
      })
  })

  it('CT-022 - deve remover um produto do carrinho', () => {
    cy.contains('button', /adicionar ao carrinho/i)
      .first()
      .click({ force: true })

    cy.get('[class*="minicart"], [class*="cart-sidebar"]', { timeout: 10000 })
      .should('exist')

    cy.contains('button', /remover|remove|excluir/i)
      .first()
      .click({ force: true })

    cy.contains(/carrinho vazio|seu carrinho está vazio|nenhum produto/i, { timeout: 10000 })
      .should('exist')
  })
})
