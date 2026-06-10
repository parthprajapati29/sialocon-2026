# Run after: gh auth login
$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "Please run: gh auth login" -ForegroundColor Yellow
    exit 1
}

gh repo create sialocon-2026 --public --source=. --remote=origin --push --description "SIALOCON 2026 - Salivary Gland Conference & Operative Workshop website"
gh api repos/parthprajapati29/sialocon-2026/pages -X POST --raw-field build_type=legacy --raw-field "source[branch]=main" --raw-field "source[path]=/"
Write-Host ""
Write-Host "Site will be live at: https://parthprajapati29.github.io/sialocon-2026/" -ForegroundColor Green
