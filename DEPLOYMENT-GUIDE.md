# 🚀 Deployment Guide - Netlify via GitHub

This guide will help you deploy your portfolio to Netlify through GitHub so you can make edits and see them automatically deployed.

## Prerequisites

- GitHub account (you already have this: @arunsabaratnam99)
- Netlify account (free tier works perfectly)

## Step 1: Connect GitHub to Netlify

1. Go to [Netlify](https://netlify.com) and sign up/log in
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account if prompted
5. Search for and select **"arun-portfolio"** from your repositories

## Step 2: Configure Build Settings

Netlify should auto-detect Next.js, but verify these settings:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18 or higher

## Step 3: Add Environment Variables

 **IMPORTANT**: Add these environment variables in Netlify:

Go to **Site settings** → **Environment variables** → **Add a variable**

Add the following:

```
LETTERBOXD_USERNAME=arunsa
GITHUB_USERNAME=arunsabaratnam99
GITHUB_TOKEN=(optional - leave empty for now)
LINKEDIN_USERNAME=arunsabaratnam
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoiYXJ1bnNhYmFyYXRuYW0iLCJhIjoiY21obGJ0Y3ozMWF3NDJqbzhseGI2YnFsaiJ9.-hcJPtpQ-IfRVQ76ky6FKQ
```

## Step 4: Deploy!

1. Click **"Deploy site"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at a URL like: `https://your-site-name.netlify.app`

## Step 5: (Optional) Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to connect your domain

## Making Changes

After deployment, any time you push changes to GitHub:

```bash
# Make your edits to the code
git add .
git commit -m "Your commit message"
git push origin main
```

Netlify will **automatically rebuild and redeploy** your site! 🎉

## Continuous Deployment

Every push to the `main` branch will trigger a new deployment. You can:

- View deployment status in the Netlify dashboard
- See deploy previews for pull requests
- Roll back to previous deployments if needed

## Useful Commands

```bash
# Run development server locally
npm run dev

# Build production version locally
npm run build

# Start production server locally
npm run start
```

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure all environment variables are set correctly
- Verify Node.js version is 18+

### API Routes Not Working
- Make sure you're deploying as a Next.js site (not static)
- The `@netlify/plugin-nextjs` should be installed automatically

### Environment Variables Not Working
- Prefix browser-accessible variables with `NEXT_PUBLIC_`
- Redeploy after adding new environment variables

## Repository

**GitHub**: https://github.com/arunsabaratnam99/arun-portfolio

Happy deploying! 🚀
