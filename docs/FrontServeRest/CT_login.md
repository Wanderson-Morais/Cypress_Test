# Casos de Teste — Tela de Login

---

## CT-001 — Login com sucesso

**Cenário:**
- **Dado** que o usuário possua credenciais válidas cadastradas no sistema
- **Quando** ele preencher o e-mail e a senha corretamente e clicar em "Entrar"
- **Então** o sistema deve autenticar o usuário e redirecioná-lo para a página inicial

**Pré-condição:** Usuário cadastrado e ativo no sistema

**Passos:**
1. Acessar a tela de login
2. Inserir `wanderson@email.com` no campo "E-mail"
3. Inserir `1234` no campo "Senha"
4. Clicar no botão "Entrar"

**Resultado esperado:** O sistema autentica o usuário e redireciona para a página inicial (dashboard)

---

## CT-002 — Login com e-mail inválido

**Cenário:**
- **Dado** que o usuário esteja na tela de login
- **Quando** ele preencher um e-mail com formato inválido e clicar em "Entrar"
- **Então** o sistema deve exibir uma mensagem de erro informando que o e-mail é inválido

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar a tela de login
2. Inserir um e-mail com formato inválido no campo "E-mail" (ex: `usuariosememail`)
3. Inserir qualquer valor no campo "Senha"
4. Clicar no botão "Entrar"

**Resultado esperado:** O sistema exibe a mensagem "E-mail inválido" e não realiza o login

---

## CT-003 — Login com senha incorreta

**Cenário:**
- **Dado** que o usuário possua um e-mail cadastrado no sistema
- **Quando** ele preencher o e-mail correto e uma senha incorreta e clicar em "Entrar"
- **Então** o sistema deve exibir uma mensagem de erro informando credenciais inválidas

**Pré-condição:** Usuário cadastrado no sistema

**Passos:**
1. Acessar a tela de login
2. Inserir `wanderson@email.com` no campo "E-mail"
3. Inserir uma senha incorreta no campo "Senha" (ex: `0000`)
4. Clicar no botão "Entrar"

**Resultado esperado:** O sistema exibe a mensagem "E-mail ou senha incorretos" e não realiza o login

---

## CT-004 — Login com campos em branco

**Cenário:**
- **Dado** que o usuário esteja na tela de login
- **Quando** ele não preencher nenhum campo e clicar em "Entrar"
- **Então** o sistema deve exibir mensagens de validação nos campos obrigatórios

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar a tela de login
2. Deixar o campo "E-mail" em branco
3. Deixar o campo "Senha" em branco
4. Clicar no botão "Entrar"

**Resultado esperado:** O sistema exibe mensagens de campo obrigatório em ambos os campos e não realiza o login

---

## CT-005 — Login com e-mail não cadastrado

**Cenário:**
- **Dado** que o usuário esteja na tela de login
- **Quando** ele preencher um e-mail que não está cadastrado no sistema e clicar em "Entrar"
- **Então** o sistema deve exibir uma mensagem informando que o usuário não foi encontrado

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar a tela de login
2. Inserir um e-mail válido mas não cadastrado no campo "E-mail" (ex: `naocadastrado@email.com`)
3. Inserir qualquer valor no campo "Senha"
4. Clicar no botão "Entrar"

**Resultado esperado:** O sistema exibe a mensagem "E-mail ou senha incorretos" e não realiza o login

---

## CT-006 — Login com tecla Enter

**Cenário:**
- **Dado** que o usuário esteja na tela de login com os campos preenchidos
- **Quando** ele pressionar a tecla Enter após preencher a senha
- **Então** o sistema deve submeter o formulário e realizar o login

**Pré-condição:** Usuário cadastrado e ativo no sistema

**Passos:**
1. Acessar a tela de login
2. Inserir `wanderson@email.com` no campo "E-mail"
3. Inserir `1234` no campo "Senha"
4. Pressionar a tecla **Enter**

**Resultado esperado:** O sistema autentica o usuário e redireciona para a página inicial, sem necessidade de clicar no botão "Entrar"

---

## Sugestões de Melhorias

Os casos abaixo não foram implementados pois a tela de login atual não possui essas funcionalidades. Caso sejam adicionadas futuramente, os testes podem ser criados com base nestas sugestões.

---

### Sugestão 1 — Exibir e ocultar senha

**Cenário:**
- **Dado** que o usuário esteja na tela de login
- **Quando** ele clicar no ícone de visualização no campo "Senha"
- **Então** o sistema deve alternar a visibilidade da senha entre texto visível e oculto

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar a tela de login
2. Inserir uma senha no campo "Senha"
3. Clicar no ícone de olho ao lado do campo "Senha"
4. Verificar que a senha está visível
5. Clicar novamente no ícone de olho

**Resultado esperado:** A senha alterna entre visível (texto) e oculta (pontos), conforme o clique no ícone

---

### Sugestão 2 — Redirecionamento para recuperação de senha

**Cenário:**
- **Dado** que o usuário esteja na tela de login e tenha esquecido sua senha
- **Quando** ele clicar no link "Esqueci minha senha"
- **Então** o sistema deve redirecioná-lo para a tela de recuperação de senha

**Pré-condição:** Nenhuma

**Passos:**
1. Acessar a tela de login
2. Clicar no link "Esqueci minha senha"

**Resultado esperado:** O sistema redireciona o usuário para a página de recuperação de senha

---

### Sugestão 3 — Bloqueio após múltiplas tentativas falhas

**Cenário:**
- **Dado** que o usuário esteja na tela de login
- **Quando** ele realizar 5 tentativas consecutivas de login com credenciais incorretas
- **Então** o sistema deve bloquear temporariamente o acesso e exibir uma mensagem de bloqueio

**Pré-condição:** Usuário cadastrado no sistema

**Passos:**
1. Acessar a tela de login
2. Inserir `wanderson@email.com` no campo "E-mail" e uma senha incorreta (ex: `0000`)
3. Clicar em "Entrar"
4. Repetir os passos 2 e 3 por mais 4 vezes (total de 5 tentativas)

**Resultado esperado:** O sistema bloqueia o acesso temporariamente e exibe a mensagem "Conta bloqueada temporariamente. Tente novamente em alguns minutos."
