# Casos de Teste — Tela de Home

---

## CT-001 — Carregar a home após o login

**Cenário:**
- **Dado** que o usuário esteja autenticado no sistema
- **Quando** ele acessar a página home
- **Então** o sistema deve exibir a lista de produtos

**Pré-condição:** Usuário autenticado

**Passos:**
1. Realizar login com credenciais válidas
2. Acessar `/home`

**Resultado esperado:** A URL contém `/home` e a lista de produtos é exibida

---

## CT-002 — Pesquisar produto pelo nome

**Cenário:**
- **Dado** que o usuário esteja na home com a lista de produtos carregada
- **Quando** ele digitar um nome de produto no campo de busca e clicar em "Pesquisar"
- **Então** o sistema deve exibir apenas os produtos que correspondem à busca

**Pré-condição:** Usuário autenticado e na home

**Passos:**
1. Digitar `Logitech MX Vertical` no campo `[data-testid="pesquisar"]`
2. Clicar no botão `[data-testid="botaoPesquisar"]`

**Resultado esperado:** A lista exibe ao menos um produto e o checkbox `[data-testid="adicionarNaLista"]` está visível

---

## CT-003 — Pesquisar produto inexistente

**Cenário:**
- **Dado** que o usuário esteja na home
- **Quando** ele pesquisar por um nome que não corresponde a nenhum produto cadastrado
- **Então** o sistema deve informar que nenhum produto foi encontrado

**Pré-condição:** Usuário autenticado e na home

**Passos:**
1. Digitar um nome inexistente no campo `[data-testid="pesquisar"]` (ex: `produtoinexistente123`)
2. Clicar no botão `[data-testid="botaoPesquisar"]`

**Resultado esperado:** O sistema exibe a mensagem "Nenhum produto foi encontrado"

---

## CT-004 — Adicionar produto à lista

**Cenário:**
- **Dado** que o usuário esteja na home com produtos listados
- **Quando** ele clicar no checkbox de adicionar à lista de um produto
- **Então** o produto deve ser adicionado e o botão de diminuir quantidade deve ser exibido

**Pré-condição:** Usuário autenticado e na home com ao menos um produto listado

**Passos:**
1. Clicar no checkbox `[data-testid="adicionarNaLista"]` do primeiro produto

**Resultado esperado:** O botão `[data-testid="product-decrease-quantity"]` fica visível

---

## CT-005 — Abrir carrinho vazio

**Cenário:**
- **Dado** que o usuário esteja na home sem nenhum item no carrinho
- **Quando** ele clicar no ícone do carrinho
- **Então** o sistema deve informar que o carrinho está vazio

**Pré-condição:** Usuário autenticado na home sem itens no carrinho

**Passos:**
1. Clicar no botão `[data-testid="shopping-cart-button"]`

**Resultado esperado:** O sistema exibe a mensagem "Seu carrinho está vazio"

---

## CT-006 — Aumentar a quantidade de item na lista

**Cenário:**
- **Dado** que o usuário tenha adicionado ao menos um produto à lista
- **Quando** ele clicar no botão de aumentar quantidade
- **Então** a quantidade do produto deve ser incrementada

**Pré-condição:** Usuário autenticado com ao menos um item adicionado à lista

**Passos:**
1. Clicar no checkbox `[data-testid="adicionarNaLista"]` do primeiro produto
2. Clicar no botão `[data-testid="product-increase-quantity"]`

**Resultado esperado:** O botão `[data-testid="product-increase-quantity"]` permanece visível e a quantidade é incrementada

---

## CT-007 — Diminuir a quantidade de item na lista

**Cenário:**
- **Dado** que o usuário tenha um produto com quantidade maior que 1 na lista
- **Quando** ele clicar no botão de diminuir quantidade
- **Então** a quantidade do produto deve ser decrementada

**Pré-condição:** Usuário autenticado com ao menos um item com quantidade > 1 na lista

**Passos:**
1. Clicar no checkbox `[data-testid="adicionarNaLista"]` do primeiro produto
2. Clicar no botão `[data-testid="product-increase-quantity"]` para aumentar para 2
3. Clicar no botão `[data-testid="product-decrease-quantity"]`

**Resultado esperado:** O botão `[data-testid="product-decrease-quantity"]` permanece visível e a quantidade é decrementada

---

## CT-008 — Limpar lista de produtos

**Cenário:**
- **Dado** que o usuário tenha ao menos um produto adicionado à lista
- **Quando** ele clicar no botão "Limpar lista"
- **Então** o sistema deve remover todos os itens da lista

**Pré-condição:** Usuário autenticado com ao menos um item na lista

**Passos:**
1. Clicar no checkbox `[data-testid="adicionarNaLista"]` do primeiro produto
2. Clicar no botão `[data-testid="limparLista"]`

**Resultado esperado:** A lista é limpa e o usuário é redirecionado para fora de `/home`

---

## CT-009 — Logout da home

**Cenário:**
- **Dado** que o usuário esteja autenticado e na home
- **Quando** ele clicar no botão "Logout"
- **Então** o sistema deve encerrar a sessão e redirecionar para a tela de login

**Pré-condição:** Usuário autenticado na home

**Passos:**
1. Clicar no botão "Logout" no header da página

**Resultado esperado:** A sessão é encerrada e o usuário é redirecionado para `/login`

---

## CT-010 — Proteção de rota sem autenticação

**Cenário:**
- **Dado** que o usuário não esteja autenticado
- **Quando** ele tentar acessar diretamente a URL `/home`
- **Então** o sistema deve redirecionar para a tela de login

**Pré-condição:** Nenhuma sessão ativa

**Passos:**
1. Limpar cookies e localStorage
2. Acessar diretamente `https://front.serverest.dev/home`

**Resultado esperado:** O sistema redireciona o usuário para `/login` sem exibir o conteúdo da home
