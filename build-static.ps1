# PowerShell script to build static export
Write-Host "Building static export for shared hosting..."

# Step 1: Temporarily rename API folder
Write-Host "Temporarily disabling API routes..."
if (Test-Path "src/app/api") {
    Rename-Item "src/app/api" "src/app/api_disabled" -Force
}

# Step 2: Build the project
Write-Host "Building Next.js project..."
npm run build

# Step 3: Restore API folder
Write-Host "Restoring API routes..."
if (Test-Path "src/app/api_disabled") {
    Rename-Item "src/app/api_disabled" "src/app/api" -Force
}

# Step 4: Check if build was successful
if (Test-Path "out") {
    Write-Host "Build successful! Static files are in the 'out' folder."
    Write-Host "Ready to upload to shared hosting!"
} else {
    Write-Host "Build failed. Check the output above for errors."
}
