# How to Initialize Git - Step by Step

## Step 1: Install Git First

Git is not currently installed on your system. You need to install it first:

1. **Download Git:**
   - Go to: https://git-scm.com/download/win
   - Click the download button (it will detect your Windows version)

2. **Install Git:**
   - Run the downloaded installer
   - Click "Next" through the installation wizard
   - **Important:** Keep all default settings (recommended)
   - Click "Install"
   - Wait for installation to complete

3. **Restart PowerShell:**
   - Close your current PowerShell window
   - Open a new PowerShell window
   - Navigate back to your project folder:
     ```powershell
     cd C:\Users\Lakshmi\Downloads\AshishWork
     ```

## Step 2: Verify Git Installation

After restarting PowerShell, verify Git is installed:

```bash
git --version
```

You should see: `git version 2.x.x` (or similar)

## Step 3: Configure Git (First Time Only)

Before your first commit, set your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and email (this will be used for your commits).

## Step 4: Initialize Git Repository

Now you can initialize Git in your project folder:

```bash
git init
```

This creates a hidden `.git` folder in your project directory.

## Step 5: Check Status

See what files will be tracked:

```bash
git status
```

## Step 6: Add Files

Add all your files to Git:

```bash
git add .
```

## Step 7: Create First Commit

Save your files with a commit message:

```bash
git commit -m "Initial commit: Portfolio website"
```

## Complete Command Sequence

Once Git is installed, run these commands in order:

```bash
# 1. Navigate to your project (if not already there)
cd C:\Users\Lakshmi\Downloads\AshishWork

# 2. Configure Git (first time only)
git config --global user.name "Ashish Gangwal"
git config --global user.email "your.email@example.com"

# 3. Initialize Git
git init

# 4. Add all files
git add .

# 5. Create first commit
git commit -m "Initial commit: Portfolio website"
```

## What Happens When You Run `git init`?

- Creates a hidden `.git` folder in your project directory
- This folder tracks all changes to your files
- Your project is now a Git repository
- You can now track changes, create commits, and push to GitHub

## Next Steps After Initialization

After initializing Git, you can:
1. Connect to GitHub (add remote repository)
2. Push your code to GitHub
3. Track future changes with commits

See `GITHUB_SETUP_GUIDE.md` for complete instructions on pushing to GitHub.

