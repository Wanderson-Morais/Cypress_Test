# Casos de Teste — Cards de Produto (Bemol)

Início da análise para elaboração dos casos de teste da página de produtos do site Bemol. O objetivo é mapear os principais fluxos e comportamentos esperados para garantir a qualidade e o funcionamento correto das funcionalidades relacionadas a produtos.

---

## CT-001 — Exibição da imagem do produto no card

**Cenário:**
- **Dado** que o usuário esteja na página inicial da Bemol
- **Quando** a página carregar os cards de produto
- **Então** cada card deve exibir a imagem do respectivo produto

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar https://www.bemol.com.br/
2. Aguardar o carregamento dos cards de produto
3. Verificar que a imagem está visível dentro do card

**Resultado esperado:** A imagem do produto é exibida corretamente dentro do card

---

## CT-002 — Exibição do nome do produto no card

**Cenário:**
- **Dado** que o usuário esteja na página inicial da Bemol
- **Quando** a página carregar os cards de produto
- **Então** cada card deve exibir o nome do respectivo produto de forma legível

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar https://www.bemol.com.br/
2. Aguardar o carregamento dos cards de produto
3. Verificar que o nome do produto está visível e não está vazio

**Resultado esperado:** O nome do produto é exibido de forma legível no card

---

## CT-003 — Exibição da marca do produto no card

**Cenário:**
- **Dado** que o usuário esteja na página inicial da Bemol
- **Quando** a página carregar os cards de produto
- **Então** cada card deve exibir a marca do respectivo produto

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar https://www.bemol.com.br/
2. Aguardar o carregamento dos cards de produto
3. Verificar que a marca do produto está visível no card

**Resultado esperado:** A marca do produto é exibida no card

---

## CT-004 — Exibição do preço promocional e parcelamento no card

**Cenário:**
- **Dado** que o usuário esteja na página inicial da Bemol
- **Quando** a página carregar um card com promoção ativa
- **Então** o card deve exibir o preço original riscado, o preço promocional em destaque e a opção de parcelamento

**Pré-condição:** Produto com promoção ativa disponível na página inicial

**Passos:**
1. Acessar https://www.bemol.com.br/
2. Aguardar o carregamento dos cards de produto
3. Localizar um card com preço promocional
4. Verificar que o preço original aparece riscado
5. Verificar que o preço promocional está em destaque (vermelho)
6. Verificar que a opção de parcelamento está visível

**Resultado esperado:** O preço original aparece riscado, o preço promocional em destaque e o parcelamento visível no card

---

## CT-005 — Botão "Mais detalhes" redireciona para a página do produto

**Cenário:**
- **Dado** que o usuário esteja na página inicial da Bemol
- **Quando** ele clicar no botão "Mais detalhes" de um card de produto
- **Então** o sistema deve redirecioná-lo para a página de detalhes do produto correspondente

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar um card de produto na listagem
3. Clicar no botão "Mais detalhes"

**Resultado esperado:** O usuário é redirecionado para a página de detalhes do produto correspondente

---

## CT-006 — Botão "Adicionar ao carrinho" adiciona o produto

**Cenário:**
- **Dado** que o usuário esteja na página inicial da Bemol
- **Quando** ele clicar no botão "Adicionar ao carrinho" de um card de produto
- **Então** o produto deve ser adicionado ao carrinho e o contador do ícone do carrinho deve ser incrementado

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar um card de produto na listagem
3. Clicar no botão "Adicionar ao carrinho"
4. Verificar o contador do ícone do carrinho no header

**Resultado esperado:** O produto é adicionado ao carrinho e o contador do ícone do carrinho é incrementado

---

## CT-007 — Clicar no nome do produto redireciona para a página do produto

**Cenário:**
- **Dado** que o usuário esteja na página inicial da Bemol
- **Quando** ele clicar no nome/link de um produto no card
- **Então** o sistema deve redirecioná-lo para a página de detalhes do produto correspondente

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar um card de produto na listagem
3. Clicar no link do nome do produto

**Resultado esperado:** O usuário é redirecionado para a página de detalhes do produto, com a URL contendo `/p`

---

## CT-008 — Campo de busca visível e funcional

**Cenário:**
- **Dado** que o usuário esteja na página inicial da Bemol
- **Quando** a página carregar
- **Então** o campo de busca deve estar visível e habilitado para digitação

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar o campo de busca no header
3. Verificar que o campo está visível e habilitado

**Resultado esperado:** O campo de busca é exibido no header e aceita digitação

---

## CT-009 — Busca por produto válido retorna resultados

**Cenário:**
- **Dado** que o usuário esteja na página inicial da Bemol
- **Quando** ele digitar o nome de um produto existente no campo de busca e confirmar
- **Então** o sistema deve exibir uma lista de produtos relacionados ao termo pesquisado

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar o campo de busca no header
3. Digitar `Samsung` no campo de busca
4. Pressionar **Enter** ou clicar no botão de busca

**Resultado esperado:** O sistema redireciona para a página de resultados e exibe produtos relacionados ao termo `Samsung`

---

## CT-010 — Busca por termo inexistente exibe mensagem de sem resultados

**Cenário:**
- **Dado** que o usuário esteja na página inicial da Bemol
- **Quando** ele digitar um termo que não corresponde a nenhum produto e confirmar a busca
- **Então** o sistema deve informar que nenhum produto foi encontrado

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar o campo de busca no header
3. Digitar `xyzprodutoinexistente123` no campo de busca
4. Pressionar **Enter** ou clicar no botão de busca

**Resultado esperado:** O sistema exibe uma mensagem informando que nenhum produto foi encontrado para o termo pesquisado
