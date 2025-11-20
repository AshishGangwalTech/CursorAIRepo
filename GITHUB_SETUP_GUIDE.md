# How to Push Your Portfolio to GitHub

## Step 1: Install Git (if not already installed)

1. Download Git from: https://git-scm.com/download/win
2. Run the installer and follow the setup wizard
3. Use default settings (recommended)
4. After installation, restart your terminal/PowerShell

## Step 2: Create a GitHub Account (if you don't have one)

1. Go to https://github.com
2. Sign up for a free account
3. Verify your email address

## Step 3: Create a New Repository on GitHub

1. Log in to GitHub
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `portfolio` (or any name you prefer)
5. Description: "My Portfolio Website"
6. Choose **Public** or **Private**
7. **DO NOT** initialize with README, .gitignore, or license (we'll add files manually)
8. Click "Create repository"

## Step 4: Initialize Git in Your Project Folder

Open PowerShell/Terminal in your project folder (`C:\Users\Lakshmi\Downloads\AshishWork`) and run:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 5: Authentication

When you push, GitHub will ask for authentication. You have two options:

### Option A: Personal Access Token (Recommended)
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Portfolio Push")
4. Select scopes: Check `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. When prompted for password, paste the token instead

### Option B: GitHub Desktop (Easier for beginners)
1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. File → Add Local Repository → Select your folder
4. Click "Publish repository" button

## Quick Command Reference

```bash
# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

## Troubleshooting

### If you get "fatal: not a git repository"
Run: `git init` first

### If you get authentication errors
- Make sure you're using a Personal Access Token (not your password)
- Or use GitHub Desktop for easier authentication

### If you want to update your repository later
```bash
git add .
git commit -m "Updated portfolio with new features"
git push
```

## Your Repository URL Format
After pushing, your portfolio will be available at:
`https://github.com/YOUR_USERNAME/portfolio`

You can also enable GitHub Pages to host your portfolio for free at:
`https://YOUR_USERNAME.github.io/portfolio`

