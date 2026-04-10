# Casos de Teste — nopCommerce Demo

**Site:** https://demo.nopcommerce.com

---

## CT-001 — Login com sucesso

**Cenário:**
- **Dado** que o usuário possua credenciais válidas cadastradas no sistema
- **Quando** ele preencher e-mail e senha corretamente e clicar em "Log in"
- **Então** o sistema deve autenticar o usuário e redirecioná-lo para a home

**Pré-condição:** Usuário `victoria_victoria@nopCommerce.com` cadastrado e ativo

**Passos:**
1. Acessar `/login`
2. Inserir `victoria_victoria@nopCommerce.com` no campo "Email"
3. Inserir `nopCommerce1` no campo "Password"
4. Clicar em "Log in"

**Resultado esperado:** URL retorna para `https://demo.nopcommerce.com/`

---

## CT-002 — Login com e-mail inválido

**Cenário:**
- **Dado** que o usuário esteja na tela de login
- **Quando** ele preencher um e-mail sem formato válido e clicar em "Log in"
- **Então** o sistema deve exibir mensagem de validação no campo de e-mail

**Passos:**
1. Acessar `/login`
2. Inserir `emailsemarroba` no campo "Email"
3. Inserir qualquer senha
4. Clicar em "Log in"

**Resultado esperado:** Mensagem de e-mail inválido é exibida abaixo do campo (`#Email-error`)

---

## CT-003 — Login com senha incorreta

**Cenário:**
- **Dado** que o usuário possua um e-mail cadastrado
- **Quando** ele informar a senha errada e clicar em "Log in"
- **Então** o sistema deve exibir mensagem de credenciais inválidas

**Passos:**
1. Acessar `/login`
2. Inserir `victoria_victoria@nopCommerce.com` no campo "Email"
3. Inserir `senhaerrada123` no campo "Password"
4. Clicar em "Log in"

**Resultado esperado:** Bloco `.message-error` é exibido; URL permanece em `/login`

---

## CT-004 — Login com campos em branco

**Cenário:**
- **Dado** que o usuário esteja na tela de login
- **Quando** ele clicar em "Log in" sem preencher nenhum campo
- **Então** o sistema deve exibir erros de campo obrigatório

**Passos:**
1. Acessar `/login`
2. Clicar em "Log in" sem preencher nada

**Resultado esperado:** Mensagem de validação é exibida no campo de e-mail (`#Email-error`)

---

## CT-005 — Link "Forgot your password?" redireciona para recuperação de senha

**Cenário:**
- **Dado** que o usuário esteja na tela de login
- **Quando** ele clicar no link "Forgot your password?"
- **Então** o sistema deve redirecioná-lo para a página de recuperação de senha

**Passos:**
1. Acessar `/login`
2. Clicar no link "Forgot your password?"

**Resultado esperado:** URL contém `/passwordrecovery`

---

## CT-006 — Registro com formulário em branco exibe erros de validação

**Cenário:**
- **Dado** que o usuário esteja na tela de registro
- **Quando** ele clicar em "Register" sem preencher nenhum campo
- **Então** o sistema deve exibir mensagens de campo obrigatório

**Passos:**
1. Acessar `/register`
2. Clicar em "Register" sem preencher nada

**Resultado esperado:** Mensagens de erro visíveis nos campos `#FirstName-error`, `#LastName-error`, `#Email-error`, `#Password-error`

---

## CT-007 — Registro com senhas não coincidentes exibe erro

**Cenário:**
- **Dado** que o usuário esteja preenchendo o formulário de registro
- **Quando** ele informar senhas diferentes em "Password" e "Confirm password"
- **Então** o sistema deve exibir erro de confirmação de senha

**Passos:**
1. Acessar `/register`
2. Preencher First name, Last name e Email
3. Inserir `Senha@123` em "Password"
4. Inserir `SenhaDiferente@123` em "Confirm password"
5. Clicar em "Register"

**Resultado esperado:** Mensagem de erro visível em `#ConfirmPassword-error`

---

## CT-008 — Registro com e-mail inválido exibe erro

**Cenário:**
- **Dado** que o usuário esteja na tela de registro
- **Quando** ele informar um e-mail com formato inválido
- **Então** o sistema deve exibir mensagem de e-mail inválido

**Passos:**
1. Acessar `/register`
2. Preencher First name, Last name
3. Inserir `emailinvalido` no campo "Email"
4. Preencher senha e confirmação de senha iguais
5. Clicar em "Register"

**Resultado esperado:** Mensagem de erro visível em `#Email-error`

---

## CT-009 — Campo de busca deve estar visível e habilitado

**Cenário:**
- **Dado** que o usuário esteja na home
- **Quando** a página carregar
- **Então** o campo de busca deve estar visível e habilitado

**Passos:**
1. Acessar a home (`/`)
2. Verificar presença do campo `#small-searchterms`

**Resultado esperado:** Campo de busca visível e habilitado no header

---

## CT-010 — Busca por produto válido retorna resultados

**Cenário:**
- **Dado** que o usuário esteja na home
- **Quando** ele pesquisar por "Apple" e clicar no botão de busca
- **Então** a página de resultados deve exibir ao menos um produto

**Passos:**
1. Acessar a home (`/`)
2. Digitar `Apple` no campo `#small-searchterms`
3. Clicar no botão de busca

**Resultado esperado:** URL contém `Apple`; lista de `.product-item` com pelo menos um resultado

---

## CT-011 — Busca por produto inexistente exibe mensagem

**Cenário:**
- **Dado** que o usuário esteja na home
- **Quando** ele pesquisar por um termo que não corresponde a nenhum produto
- **Então** o sistema deve informar que nenhum produto foi encontrado

**Passos:**
1. Acessar a home (`/`)
2. Digitar `xyzprodutoinexistente999` no campo `#small-searchterms`
3. Clicar no botão de busca

**Resultado esperado:** Mensagem "No products were found that matched your criteria." é exibida

---

## CT-012 — Deve adicionar produto ao carrinho

**Cenário:**
- **Dado** que o usuário esteja em uma página de produto
- **Quando** ele clicar em "Add to cart"
- **Então** o sistema deve exibir notificação de sucesso

**Passos:**
1. Acessar `/computers/notebooks`
2. Clicar no nome do primeiro produto
3. Clicar em "Add to cart"

**Resultado esperado:** Notificação `.bar-notification.success` é exibida

---

## CT-013 — Contador do carrinho deve atualizar após adicionar produto

**Cenário:**
- **Dado** que o usuário acesse uma página de produto
- **Quando** ele adicionar o produto ao carrinho
- **Então** o contador de itens no ícone do carrinho deve ser atualizado

**Passos:**
1. Acessar `/computers/notebooks`
2. Registrar o valor atual de `.cart-qty`
3. Clicar no nome do primeiro produto e adicionar ao carrinho
4. Verificar o novo valor de `.cart-qty`

**Resultado esperado:** Valor de `.cart-qty` é diferente do valor inicial

---

## CT-014 — Deve remover produto do carrinho

**Cenário:**
- **Dado** que o usuário tenha ao menos um produto no carrinho
- **Quando** ele clicar no botão de remover na página do carrinho
- **Então** o carrinho deve ficar vazio

**Passos:**
1. Acessar `/computers/notebooks`, clicar no produto e adicionar ao carrinho
2. Acessar `/cart`
3. Clicar no botão `.remove-btn` do produto

**Resultado esperado:** Mensagem "Your Shopping Cart is empty!" é exibida

---

## CT-015 — Carrinho vazio deve exibir mensagem

**Cenário:**
- **Dado** que o usuário não tenha adicionado nenhum produto ao carrinho
- **Quando** ele acessar diretamente a página do carrinho
- **Então** o sistema deve informar que o carrinho está vazio

**Passos:**
1. Acessar `/cart` diretamente sem adicionar produtos

**Resultado esperado:** Mensagem "Your Shopping Cart is empty!" é exibida
