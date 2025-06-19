# 🚀 Push Birding with Cob to GitHub
# Run this script after creating your GitHub repository

Write-Host "🐦 Pushing Birding with Cob to GitHub..." -ForegroundColor Green

# Prompt for GitHub repository URL
Write-Host "📝 Please enter your GitHub repository URL:" -ForegroundColor Yellow
Write-Host "   (Example: https://github.com/yourusername/birding-with-cob.git)" -ForegroundColor Gray
$repoUrl = Read-Host "Repository URL"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "❌ Error: Repository URL is required." -ForegroundColor Red
    exit 1
}

# Add remote origin
Write-Host "🔗 Adding remote origin..." -ForegroundColor Yellow
git remote add origin $repoUrl

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Remote might already exist. Removing and re-adding..." -ForegroundColor Yellow
    git remote remove origin
    git remote add origin $repoUrl
}

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🎉 Your repository is now live at:" -ForegroundColor Cyan
    Write-Host "   $repoUrl" -ForegroundColor White
    Write-Host ""
    Write-Host "🚀 Next step: Deploy to Vercel!" -ForegroundColor Green
    Write-Host "   1. Go to https://vercel.com/new" -ForegroundColor Gray
    Write-Host "   2. Import your repository" -ForegroundColor Gray
    Write-Host "   3. Click Deploy" -ForegroundColor Gray
    Write-Host "   4. Your app will be live in 2 minutes!" -ForegroundColor Gray
} else {
    Write-Host "❌ Failed to push to GitHub. Please check:" -ForegroundColor Red
    Write-Host "   - Repository URL is correct" -ForegroundColor Gray
    Write-Host "   - You have access to the repository" -ForegroundColor Gray
    Write-Host "   - Repository exists on GitHub" -ForegroundColor Gray
}
