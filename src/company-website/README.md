# Company Website - Bilingual Astro Template

A modern, bilingual (English/Mongolian) company website built with Astro, React, and Tailwind CSS. Optimized for GitHub Pages deployment with static site generation.

## 🚀 Features

- ✅ **Bilingual Support** - Full English and Mongolian translations
- ✅ **Static Site Generation** - Fast, SEO-friendly pages
- ✅ **Contact Form** - Working email integration via Web3Forms
- ✅ **Modern Design** - Dark theme with gradient accents
- ✅ **GitHub Pages Ready** - Automated deployment workflow
- ✅ **Responsive** - Mobile-first design
- ✅ **Fast** - Optimized performance with Astro

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── components/
│   │   └── ContactForm.tsx     # React contact form
│   ├── layouts/
│   │   └── Layout.astro        # Base layout with nav
│   ├── pages/
│   │   ├── index.astro         # English home
│   │   ├── about.astro         # English about
│   │   ├── services.astro      # English services
│   │   ├── portfolio.astro     # English portfolio
│   │   ├── contact.astro       # English contact
│   │   └── mn/                 # Mongolian pages
│   │       ├── index.astro
│   │       ├── about.astro
│   │       ├── services.astro
│   │       ├── portfolio.astro
│   │       └── contact.astro
│   └── utils/
│       └── i18n.ts             # Translation utilities
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind configuration
└── package.json
```

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd company-website
npm install
```

### 2. Configure for GitHub Pages

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPO-NAME',
  // ... rest of config
});
```

Replace:
- `YOUR-USERNAME` with your GitHub username
- `YOUR-REPO-NAME` with your repository name

### 3. Setup Contact Form

The contact form uses **Web3Forms** (free, unlimited submissions).

1. Go to https://web3forms.com
2. Sign up and get your free Access Key
3. Edit `src/components/ContactForm.tsx` line 37:
   ```typescript
   access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
   ```

**Alternative Email Services:**
- **Formspree**: https://formspree.io (50/month free)
- **EmailJS**: https://www.emailjs.com (200/month free)
- **Getform**: https://getform.io (50/month free)

### 4. Enable GitHub Pages

1. Push your code to GitHub
2. Go to repository **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: GitHub Actions
4. Push to `main` branch to trigger deployment

## 🚀 Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### Adding New Pages

**English page:**
```bash
src/pages/new-page.astro
```

**Mongolian page:**
```bash
src/pages/mn/new-page.astro
```

### Adding Translations

Edit `src/utils/i18n.ts` and add new keys to the `ui` object:

```typescript
export const ui = {
  en: {
    'your.new.key': 'English text',
  },
  mn: {
    'your.new.key': 'Монгол текст',
  }
}
```

### Updating Navigation

Edit `src/layouts/Layout.astro` to add/remove navigation links.

### Styling

The project uses Tailwind CSS. You can customize:
- Colors and theme in `tailwind.config.mjs`
- Global styles in `src/layouts/Layout.astro`

## 📦 Tech Stack

- **Framework**: [Astro](https://astro.build) 4.15
- **UI Components**: [React](https://react.dev) 18
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 3
- **Fonts**: Inter + Space Grotesk (Google Fonts)
- **Forms**: [Web3Forms](https://web3forms.com)
- **Deployment**: GitHub Pages + GitHub Actions

## 🌐 URLs

After deployment, your site will be available at:

- **English**: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
- **Mongolian**: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/mn/`

## 🔧 Troubleshooting

### Pages not loading after deployment

Make sure `base` in `astro.config.mjs` matches your repository name exactly.

### Contact form not working

1. Verify your Web3Forms Access Key is correct
2. Check browser console for errors
3. Test the form on your local development server first

### Deployment fails

1. Check GitHub Actions tab for error logs
2. Ensure GitHub Pages is enabled in repository settings
3. Make sure you pushed to the `main` branch

## 📄 License

This template is free to use for any project.

## 🤝 Contributing

Feel free to submit issues and pull requests!
