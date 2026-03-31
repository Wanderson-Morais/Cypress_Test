Início da análise para elaboração dos casos de teste da página de produtos do site Bemol. O objetivo é mapear os principais fluxos e comportamentos esperados para garantir a qualidade e o funcionamento correto das funcionalidades relacionadas a produtos.

---

## Cards de Produto

### CT-001 — Exibição da imagem do produto
**Pré-condição:** Estar na página inicial da Bemol.
**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar um card de produto na listagem

**Resultado esperado:** A imagem do produto é exibida corretamente dentro do card.

---

### CT-002 — Exibição do nome do produto
**Pré-condição:** Estar na página inicial da Bemol.
**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar um card de produto na listagem

**Resultado esperado:** O nome do produto é exibido de forma legível no card.

---

### CT-003 — Exibição da marca do produto
**Pré-condição:** Estar na página inicial da Bemol.
**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar um card de produto na listagem

**Resultado esperado:** A marca do produto é exibida no card.

---

### CT-004 — Exibição do preço promocional e parcelamento
**Pré-condição:** Estar na página inicial da Bemol.
**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar um card de produto com promoção ativa

**Resultado esperado:** O preço original aparece riscado e o preço promocional em destaque (vermelho), junto com a opção de parcelamento.

---

### CT-005 — Botão "Mais detalhes" redireciona para a página do produto
**Pré-condição:** Estar na página inicial da Bemol.
**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar um card de produto
3. Clicar no botão "Mais detalhes"

**Resultado esperado:** O usuário é redirecionado para a página de detalhes do produto correspondente.

---

### CT-006 — Botão "Adicionar ao carrinho" adiciona o produto
**Pré-condição:** Estar na página inicial da Bemol.
**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar um card de produto
3. Clicar no botão "Adicionar ao carrinho"

**Resultado esperado:** O produto é adicionado ao carrinho e o contador do ícone do carrinho é incrementado.

---

### CT-007 — Nome do produto no card redireciona para a página do produto
**Pré-condição:** Estar na página inicial da Bemol.
**Passos:**
1. Acessar https://www.bemol.com.br/
2. Localizar um card de produto
3. Clicar no nome do produto

**Resultado esperado:** O usuário é redirecionado para a página de detalhes do produto correspondente.