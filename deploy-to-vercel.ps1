# Deploy Birding with Cob to Vercel
# Run this script from the wingquest folder

Write-Host "Deploying Birding with Cob to Vercel..." -ForegroundColor Green

# Check if we're in the right directory
if (!(Test-Path "package.json")) {
    Write-Host "Error: package.json not found. Please run this from the wingquest folder." -ForegroundColor Red
    exit 1
}

# Check if Vercel CLI is installed
try {
    vercel --version | Out-Null
} catch {
    Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Build the project
Write-Host "Building the project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Please fix errors and try again." -ForegroundColor Red
    exit 1
}

# Deploy to Vercel
Write-Host "Deploying to Vercel..." -ForegroundColor Yellow
vercel --prod

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Your Birding with Cob app is now live!" -ForegroundColor Cyan
Write-Host "Login with: admin / birdwatcher2025" -ForegroundColor Yellow
