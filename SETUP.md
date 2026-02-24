# Quick Setup Guide

## 🚀 Get Your Site Online in 5 Minutes

### Step 1: Upload to GitHub

1. Create a new repository on GitHub (e.g., `my-company-site`)
2. Upload all project files to the repository
3. Make sure to push to the `main` branch

### Step 2: Configure the Site

Edit `astro.config.mjs`:

```javascript
site: 'https://YOUR-USERNAME.github.io',
base: '/my-company-site',  // Your repo name
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in the left sidebar
3. Under "Build and deployment":
   - Set **Source** to: **GitHub Actions**
4. Save!

### Step 4: Setup Contact Form (2 minutes)

1. Visit: https://web3forms.com
2. Enter your email and click "Get Access Key"
3. Copy your access key
4. Open `src/components/ContactForm.tsx`
5. Replace line 37:
   ```typescript
   access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',  // Paste your key here
   ```

### Step 5: Deploy!

Commit and push your changes:

```bash
git add .
git commit -m "Configure site"
git push origin main
```

Your site will automatically deploy in 2-3 minutes!

## 🌐 Access Your Site

- **English**: `https://YOUR-USERNAME.github.io/my-company-site/`
- **Mongolian**: `https://YOUR-USERNAME.github.io/my-company-site/mn/`

## ✏️ Making Changes

1. Edit files locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Automatic deployment happens in 2-3 minutes

## 📱 Customization Tips

**Change Company Name:**
Edit `src/layouts/Layout.astro` line 27

**Change Colors:**
Edit gradient colors in any `.astro` file:
- `from-cyan-400` → change cyan
- `to-blue-500` → change blue

**Add More Pages:**
Create new `.astro` files in `src/pages/` (English) or `src/pages/mn/` (Mongolian)

**Update Translations:**
Edit `src/utils/i18n.ts`

## ❓ Common Issues

**Site shows 404:**
- Check that `base` in `astro.config.mjs` matches your repo name exactly

**Contact form not working:**
- Verify your Web3Forms access key is correct
- Check browser console for errors

**Deployment failed:**
- Go to GitHub → Actions tab → Click the failed workflow to see errors
- Common fix: Make sure `base` path is correct

## 🎨 Design Credits

Inspired by modern portfolio sites with a dark theme, gradient accents, and clean typography.

## 📞 Need Help?

- Astro Docs: https://docs.astro.build
- Web3Forms Docs: https://docs.web3forms.com
- GitHub Pages Docs: https://docs.github.com/pages

---

**Your site is ready! Just follow these 5 steps and you'll be live! 🚀**
