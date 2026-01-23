# 📤 Instruções para Upload no GitHub

## Opção 1: Usar o Script Automático (Recomendado)

1. Abra o PowerShell como Administrador
2. Navegue até a pasta do projeto:
   ```powershell
   cd "C:\Users\Enzo\Downloads\EpiConecta"
   ```
3. Execute o script:
   ```powershell
   .\upload-to-github.ps1
   ```

## Opção 2: Comandos Manuais

Se preferir fazer manualmente, execute os seguintes comandos no PowerShell:

```powershell
# 1. Navegar para a pasta do projeto
cd "C:\Users\Enzo\Downloads\EpiConecta"

# 2. Verificar status
git status

# 3. Adicionar todos os arquivos modificados
git add .

# 4. Criar commit com mensagem descritiva
git commit -m "feat: Adiciona aba de notificação de casos e corrige scroll mobile

- Adiciona nova aba de Notificação de Casos com formulário completo
- Implementa abas para 6 doenças tropicais negligenciadas
- Corrige problema de scroll no mobile
- Melhora responsividade e UX geral
- Adiciona sistema de toast notifications
- Mantém paleta de cores original"

# 5. Fazer push para o GitHub
git push origin main
```

## Opção 3: Usar GitHub Desktop (Mais Fácil)

1. Baixe e instale o GitHub Desktop: https://desktop.github.com/
2. Abra o GitHub Desktop
3. Selecione o repositório: `C:\Users\Enzo\Downloads\EpiConecta`
4. Você verá todas as mudanças na interface
5. Adicione uma mensagem de commit
6. Clique em "Commit to main"
7. Clique em "Push origin" para enviar para o GitHub

## ⚠️ Se o Git não estiver instalado:

1. Baixe o Git: https://git-scm.com/download/win
2. Instale seguindo o assistente
3. Reinicie o PowerShell
4. Execute os comandos novamente

## 🔐 Autenticação no GitHub

Se for solicitada autenticação:

1. **Token de Acesso Pessoal (Recomendado)**:
   - Vá em: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Gere um novo token com permissões `repo`
   - Use o token como senha quando solicitado

2. **Ou use GitHub CLI**:
   ```powershell
   gh auth login
   ```

## ✅ Verificar Upload

Após o push, acesse:
https://github.com/Enzodbbruno/Epi

Você deve ver as mudanças no repositório!
