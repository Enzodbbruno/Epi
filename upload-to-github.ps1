# Script para fazer upload das mudanças para o GitHub
# Execute este script no PowerShell

Write-Host "=== Upload para GitHub - EpiConecta ===" -ForegroundColor Cyan
Write-Host ""

# Verificar se o Git está instalado
try {
    $gitVersion = git --version
    Write-Host "✓ Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git não encontrado!" -ForegroundColor Red
    Write-Host "Por favor, instale o Git de: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Navegar para o diretório do projeto
$projectPath = "C:\Users\Enzo\Downloads\EpiConecta"
Set-Location $projectPath

Write-Host "Diretório: $projectPath" -ForegroundColor Cyan
Write-Host ""

# Verificar status
Write-Host "Verificando status do repositório..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "Adicionando todos os arquivos modificados..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "Criando commit..." -ForegroundColor Yellow
$commitMessage = "feat: Adiciona aba de notificação de casos e corrige scroll mobile

- Adiciona nova aba de Notificação de Casos com formulário completo
- Implementa abas para 6 doenças tropicais negligenciadas
- Corrige problema de scroll no mobile
- Melhora responsividade e UX geral
- Adiciona sistema de toast notifications
- Mantém paleta de cores original"

git commit -m $commitMessage

Write-Host ""
Write-Host "Fazendo push para o GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "=== Upload concluído! ===" -ForegroundColor Green
Write-Host "Acesse: https://github.com/Enzodbbruno/Epi" -ForegroundColor Cyan
