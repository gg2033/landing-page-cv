# Gustavo Gennari - Portfolio & CV

Modern, clean, and responsive landing page showcasing my professional experience, skills, and projects.

🌐 **Live Demo:** [View Portfolio](https://gg2033.github.io/landing-page-cv/)

![Portfolio Preview](./docs/img/example-landing-page.png)

---

## 🚀 Features

- ✨ **Modern Design** — Clean, minimal aesthetic with soft shadows and smooth animations
- 📱 **Fully Responsive** — Mobile-first approach, optimized for all devices
- ⚡ **Lightning Fast** — Pure HTML/CSS/JS, no build process required
- 🎨 **Custom Design System** — Consistent color palette and typography
- 🎯 **Smooth Navigation** — Scroll animations and active link highlighting
- 📧 **Interactive Contact** — Click-to-copy email functionality
- 🎵 **Rich Media** — Embedded audio players for soundtrack projects
- 🌍 **GitHub Pages Ready** — Zero configuration deployment

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — Intersection Observer, smooth scroll, mobile navigation
- **Google Fonts** — Poppins & Inter

---

## 📂 Project Structure

```
landing-page-cv/
├── index.html              # Main page
├── assets/
│   ├── css/
│   │   └── style.css      # Complete design system
│   ├── js/
│   │   └── main.js        # Interactions & animations
│   ├── img/               # Project images
│   └── audio/             # Soundtrack samples
├── .gitignore
└── README.md
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#2E2E2E` | Main text, headings |
| Secondary | `#696969` | Secondary text |
| Accent | `#4DA1FF` | CTAs, links, highlights |
| Background | `#F9F9F9` | Page background |

### Typography

- **Headings:** Poppins (600/700 weight)
- **Body:** Inter (400/500/600 weight)
- **Sizes:** 48px (hero), 32px (sections), 16px (body)

---

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/gg2033/landing-page-cv.git
   cd landing-page-cv
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct open
   open index.html

   # Option 2: Python server
   python3 -m http.server 8000
   # Visit: http://localhost:8000

   # Option 3: Node.js
   npx serve .
   # Visit: http://localhost:3000
   ```

---

## 📦 Deployment

### GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/gg2033/landing-page-cv.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository **Settings** > **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / root
   - Click **Save**

3. **Access your site**
   - URL: `https://gg2033.github.io/landing-page-cv/`
   - Wait 1-2 minutes for deployment

### Alternative Deployments

<details>
<summary><b>Netlify</b></summary>

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir .
```
</details>

<details>
<summary><b>Vercel</b></summary>

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```
</details>

---

## 📋 Sections

1. **Hero** — Introduction with profile photo and tagline
2. **About Me** — Professional background and interests
3. **Skills** — Technical expertise (Java, Python, AI, Rust, Unity, Blender)
4. **Experience** — Work history timeline
5. **Projects** — Featured portfolio pieces with live demos
6. **Contact** — Email with copy-to-clipboard functionality

---

## 🎯 Featured Projects

| Project | Year | Tech Stack |
|---------|------|------------|
| **BeautyTools** | 2025 | Chrome Extension |
| **Visual Prototype to App Mobile** | 2025 | Kotlin, Android Studio, Compose |
| **Task Generate** | 2024 | AI, Trello API, Web |
| **Blender Extension** | 2024 | Python, AI, ControlNet |
| **Web React and Go** | 2020 | React, Go |
| **Original Soundtrack for RPG** | 2021 | FL Studio, Adaptive Audio |
| **Landing Page - Contractors** | 2018 | HTML, CSS, JavaScript |

---

## 🔧 Customization

### Update Personal Info

Edit `index.html`:

```html
<!-- Line 50-51: Name and tagline -->
<h1 class="hero__title">Your Name</h1>
<p class="hero__tagline">Your Professional Tagline</p>

<!-- Line 345-346: Contact email -->
<a href="mailto:your.email@example.com" class="contact__email">
    your.email@example.com
</a>
```

### Change Colors

Edit `assets/css/style.css`:

```css
:root {
    --color-primary: #YourColor;
    --color-accent: #YourAccent;
    /* ... */
}
```

### Add New Project

```html
<div class="project-card">
    <div class="project-card__image">
        <img src="./assets/img/your-image.png" alt="Project description">
    </div>
    <div class="project-card__content">
        <h3 class="project-card__title">Project Name</h3>
        <p>Year: 2025</p>
        <p class="project-card__description">
            Your project description here.
        </p>
        <div class="project-card__tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
    </div>
</div>
```

---

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (single column, hamburger menu)
- **Tablet/Desktop:** ≥ 768px (grid layouts, horizontal navigation)

---

## ⚡ Performance

- **No dependencies** — Zero npm packages
- **Optimized fonts** — Preconnect to Google Fonts
- **Lazy animations** — Intersection Observer for on-scroll effects
- **Minimal JavaScript** — < 5KB gzipped

---

## 🐛 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contact

**Gustavo Gennari**
📧 Email: [gfgustavo2015@gmail.com](mailto:gfgustavo2015@gmail.com)
💼 Portfolio: [https://gg2033.github.io/landing-page-cv/](https://gg2033.github.io/landing-page-cv/)

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons: Emoji placeholders (replace with your preference)
- Fonts: [Google Fonts](https://fonts.google.com/) (Poppins, Inter)

---

<p align="center">
  Built with ❤️ and ☕ by Gustavo Gennari
</p>
